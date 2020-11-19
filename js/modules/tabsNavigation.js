export default function initTabsNavigation() {
    const tabsMenu = document.querySelectorAll('[data-tab="menu"] li')
    const tabsContent =  document.querySelectorAll('[data-tab="content"] section');

    function activeTabs(index) {
        tabsContent.forEach(section => {
            section.classList.remove('active')
        })

        const direction = tabsContent[index].dataset.anime;
        tabsContent[index].classList.add('active', direction)
    }

    if(tabsMenu.length && tabsContent.length) {
        tabsContent[0].classList.add('active')

        tabsMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTabs(index)
            })
        })
    }

}