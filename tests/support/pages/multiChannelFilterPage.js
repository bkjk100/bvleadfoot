define(['../utils', './elementsPage', './propertiesPage', 'require'], function (utils, elementsPage, propertiesPage, require) {
    function multiChannelFilterPage(remote) {
        this.remote = remote;
    }

    multiChannelFilterPage.prototype = {
        constructor: multiChannelFilterPage,

        addFilter: function () {
            var session = this.remote;
            return session
                //.findByXpath(elementsPage.BETA_TAB_LOCATOR)
                //.click()
                .get(propertiesPage.CONSOLE_URL)
                .setFindTimeout(5000)
                .findById('btn-filters')
                    .click()
                    .sleep(2000) // needed for chrome
                    .end()
                .then(function () {
                    return utils.enterText(session, 'facebook', elementsPage.CHANNEL_FILTER_LOCATOR);
                })
                .then(function () {
                    return utils.enterText(session, 'google', elementsPage.CHANNEL_FILTER_LOCATOR);
                })
                .findByXpath(elementsPage.RESULTS_COUNT_LOCATOR)
                .sleep(2000)
                .getVisibleText()
                .then(function (text) {
                    return text;;
                });
        }
    };

    return multiChannelFilterPage;
});
