import clock from '../assets/clock.png'
import dollar from '../assets/dollar.png'
import simple from '../assets/simple.png'

export default function WhyCard( { textIndex } ) {
    const text = [
        {icon: clock, title: 'Spart Zeit', text: 'Mit Jars sparen Sie wertvolle Zeit beim Design, denn unser erfahrendes Team versteht Ihr Unternehmen und Ihre Zielgruppe von Anfang an. Wir liefern maßgeschneiderte Lösungen, ohne wertvolle Zeit mit endlosen Revisionen zu verschenken.'},
        {icon: dollar, title: 'Spart Geld', text: 'Erleben Sie Premium-Design, das Ihr Budget schont, mit Jars! Unsere Agentur bietet erstklassige Corporate-Design-Lösungen zu einem unschlagbaren Preis. Wir wissen, wie wichtig Kostenbewusstsein ist, und liefern dennoch ein Design, das Ihre Marke hervorhebt und beeindruckt.'},
        {icon: simple, title: 'Einfach kreativ', text: 'Mit Jars erhalten Sie ein unschlagbares Paket aus Kreativität, Effizienz und Erschwinglichkeit. Unser Team denkt stets außerhalb der Box, um innovative Designkonzepte zu entwickeln, die Ihre Marke einzigartig machen.'},
    ]

    return (
        <div class="w-full py-10 px-10 mx-5 bg-primary-default rounded flex flex-col justify-start items-center">
            <img src={text[textIndex].icon} class="h-20"></img>
            <h1 class=" font-bodonimt text-text text-4xl my-8">{text[textIndex].title}</h1>
            <p class="font-bodonimt text-text text-2xl hyphens-auto" lang='de'>{text[textIndex].text}</p>
        </div>
    )
}