// tabs.js

// Tabs

const initTabs = () => {

    const tabSections =  document.querySelectorAll('.js-tabs');
    if (!tabSections) return;

    tabSections.forEach((tabSection) => {

        const tabsTabs = tabSection.querySelectorAll('.js-tabs__tab');
        const tabsContents = tabSection.querySelectorAll('.js-tabs__content');

        tabsTabs.forEach((tabsTab, tabsTabIndex) => {

            tabsTab.addEventListener('click', (event) => {

                event.preventDefault();

                tabsTabs.forEach((tabsTab) => {
                    tabsTab.classList.remove('tabs__tab--active');
                });

                tabsTab.classList.add('tabs__tab--active');

                tabsContents.forEach((tabsContent) => {
                    if (tabsContent.dataset.tabsContentName == tabsTab.dataset.tabsContentName) {
                        tabsContent.classList.add('tabs__content--active');
                    } else {
                        tabsContent.classList.remove('tabs__content--active');
                    }
                });
                
            });

            if (tabsTabIndex == 0) {
                tabsTab.click();
            }

        });
    });

};

initTabs();