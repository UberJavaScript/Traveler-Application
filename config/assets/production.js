'use strict';

/* eslint comma-dangle:[0, "only-multiline"] */

module.exports = {
  client: {
    lib: {
        css: [
            // bower:css
            'public/lib/bootstrap/dist/css/bootstrap.css',
            'public/lib/bootstrap/dist/css/bootstrap-theme.css',
            'public/lib/ng-img-crop/compile/unminified/ng-img-crop.css',
            'public/lib/angular-ui-notification/dist/angular-ui-notification.css',
            'public/lib/components-font-awesome/css/font-awesome.min.css'
            // endbower
        ],
        js: [
            // bower:js
            'public/lib/angular/angular.js',
            'public/lib/angular-animate/angular-animate.js',
            'public/lib/angular-sanitize/angular-sanitize.min.js',
            'public/lib/angular-touch/angular-touch.min.js',
            'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
            'public/lib/ng-file-upload/ng-file-upload.js',
            'public/lib/ng-img-crop/compile/unminified/ng-img-crop.js',
            'public/lib/angular-messages/angular-messages.js',
            'public/lib/angular-mocks/angular-mocks.js',
            'public/lib/angular-resource/angular-resource.js',
            'public/lib/angular-ui-notification/dist/angular-ui-notification.js',
            'public/lib/angular-ui-router/release/angular-ui-router.js',
            'public/lib/owasp-password-strength-test/owasp-password-strength-test.js',
            'public/lib/jquery/dist/jquery.min.js',
            'public/own/own-jqyery.js'
            // endbower
        ]
        // endbower
    }
    // css: 'public/dist/application*.min.css',
    // js: 'public/dist/application*.min.js'
  }
};
