<?php
namespace Nreach\T3Base;

use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Extbase\Mvc\Controller\ActionController;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use TYPO3\CMS\Core\Resource\Exception\FileDoesNotExistException;
use TYPO3\CMS\Core\Resource\File;
use TYPO3\CMS\Core\Resource\ResourceFactory;
use Helhum\Typo3Console\Mvc\Cli\CommandDispatcher;

use Nreach\T3Base\Configuration;
use Nreach\T3Base\DataSourceDelegate;
use Nreach\Base\Service;

/**
 * Remote Controller of the Nreach extension
 * Acces remote services and allow proxied calls to them via ajax
 *
 * @category    Controller
 */
class Remote implements \TYPO3\CMS\Core\SingletonInterface
{
    private $configuration = null;
    private $dataSource = null;
    private $service = null;

    public function __construct()
    {
        $this->configuration = GeneralUtility::makeInstance(Configuration::class);
        $this->dataSource = GeneralUtility::makeInstance(DataSourceDelegate::class);
        $this->service = GeneralUtility::makeInstance(
            Service::class,
            $this->configuration->getHost(),
            $this->configuration->getKeys(),
            $this->dataSource
        );
    }

    public function call(string $method, array $arguments = [], $body = '') {
        return $this->service->call($method, $arguments, $body);
    }
}
