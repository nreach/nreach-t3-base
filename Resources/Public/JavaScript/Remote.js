define([
    'jquery'
], function (
    $
) {
    function route(id)
    {
        if (TYPO3)
            return TYPO3.settings.ajaxUrls[id];
        else if (window && window.parent && window.parent.TYPO3)
            return window.parent.TYPO3.settings.ajaxUrls[id];
        else
            return '';
    }

    function remote(action, body, args, cb)
    {
        if (action === 'pagecontent')
            return pagecontent(args, cb);

		$.post(route('nreacht3_nreacht3'), {action: action,  args: args, body: body})
         .done(function(data) {
             cb(null, data);
         }).
          fail(function(jqXHR, textStatus, errorThrown) {
              cb(jqXHR.responseText,  null);
          });
    }

    function pagecontent(args, cb) {

    }

    return remote;
});
