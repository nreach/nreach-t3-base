<?php
namespace Nreach\T3Base\Controller;

use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Extbase\Mvc\Controller\ActionController;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use TYPO3\CMS\Core\Resource\Exception\FileDoesNotExistException;
use TYPO3\CMS\Core\Resource\File;
use TYPO3\CMS\Core\Resource\ResourceFactory;
use Helhum\Typo3Console\Mvc\Cli\CommandDispatcher;

use Nreach\T3Base\Configuration;
use Nreach\Base\Service;

/**
 * Remote Controller of the Nreach extension
 * Acces remote services and allow proxied calls to them via ajax
 *
 * @category    Controller
 */
class AjaxController extends ActionController
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

    public function nreachAjax(ServerRequestInterface $request, ResponseInterface $response)
    {
        $params = $request->getParsedBody();
        $action = $params['action'];

        if ($action === 'botAction') {
           return $this->chatCommand($params, $response);
        }

        $args = $params['args'] ?: [];
        $body = NULL;

        if (isset($args['fileuid'])) {
            $body = base64_encode($this->getFileObjectByUid($args['fileuid'])->getContents());
            unset($args['fileuid']);
        } else if (!empty($args['body'])) {
            $body = $args['body'];
        }
        unset($args['body']);

        $result = $this->service->call($action, $args, $body);
        $response->getBody()->write($result);
        return $response;
    }

    /**
	 * @param integer $uid
	 * @return File
	 * @throws FileDoesNotExistException
	 */
	protected function getFileObjectByUid($uid) {
		return ResourceFactory::getInstance()->getFileObject((integer) $uid);
	}

    protected function chatCommand($arguments, $response) {
        // $dispatcher = CommandDispatcher::create('/var/www/vagrant/bin/typo3cms');
        // $output = $dispatcher->executeCommand('cache:flush');
        $response->getBody()->write(\json_encode(["result" => $output]));
        return $response;
    }
}
