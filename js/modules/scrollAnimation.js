export default function initScrollAnimation() {
    const sections = document.querySelectorAll('[data-anime="scroll"]')
    const minHeightToShowSections = window.innerHeight * 0.6

    function scrollAnimation() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const isSectionVisible = (sectionTop - minHeightToShowSections) < 0;
            const sectionActive = section.classList.contains('active')
            
            if(isSectionVisible) {
              return section.classList.add('active')
            } 

            if(sectionActive) {
                return section.classList.remove('active') 
            }
        })
    }

    if(sections.length) {
        scrollAnimation()
        window.addEventListener('scroll', scrollAnimation)
    }
}