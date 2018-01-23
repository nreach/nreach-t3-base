<?php
namespace Nreach\T3Base;

use TYPO3\CMS\Core\Resource\Exception\FileDoesNotExistException;
use TYPO3\CMS\Core\Resource\File;
use TYPO3\CMS\Core\Resource\FileInterface;
use TYPO3\CMS\Core\Resource\ProcessedFile;
use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Core\Resource\ResourceFactory;

class Utility
{

    /**
     * @var array
     */
    protected static $knownImageExtensions = array(
        'jpg', 'jpeg', 'png', 'gif', 'bmp', 'tiff'
    );

    public static function getKnownImageExtensions()
    {
        return Utility::$knownImageExtensions;
    }

    public static function createPublicTempFile($prefix,$suffix)
    {
        $fullname = GeneralUtility::tempnam($prefix, $suffix);
        $urlname = preg_replace('/.*(?=\/typo3temp)/', '', $fullname);
        $url = GeneralUtility::locationHeaderUrl($urlname);
        return [
            'name'  => $fullname,
            'url' => $url
        ];
    }

    public static function removePublicTempFile($temp)
    {
        GeneralUtility::unlink_tempfile($temp['name']);
    }

    public static function copyToPublic($uid)
    {
        $fileObject = Utility::uid2file($uid);

        $nameWithout = $fileObject->getNameWithoutExtension();
        $ext = $fileObject->getExtension();

        $temp = Utility::createPublicTempFile($nameWithout,'.'.$ext);

        file_put_contents($temp['name'], $fileObject->getContents());

        return $temp;
    }

    public static function decopyFromPublic($temp)
    {
        Utility::removePublicTempFile($temp);
    }

    /**
     * @param integer $uid
     * @return File
     * @throws FileDoesNotExistException
     */
    public static function uid2file($uid)
    {
        return ResourceFactory::getInstance()->getFileObject((integer) $uid);
    }

    public static function isImage(FileInterface $file)
    {
        return in_array(
            $file->getExtension(),
            Utility::getKnownImageExtensions()
        );
    }

    /**
     * @param FileInterface|File $file
     * @param int $maxWidth
     * @param int $maxHeight
     * @return FileInterface
     */
    public static function limitImageDimension(FileInterface $file, $maxWidth = 1200, $maxHeight = 1200)
    {
        if (!static::isImage($file) && !($file instanceof ProcessedFile)) {
            return $file;
        }

        return $file->process(ProcessedFile::CONTEXT_IMAGECROPSCALEMASK, [
            'maxWidth' => $maxWidth,
            'maxHeight' => $maxHeight,
        ]);
    }
}
