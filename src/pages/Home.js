import charachter from './assets/character.png'
import mouse from './assets/mouse.png'

import WhyCard from './components/WhyCard';
import PriceCard from './components/PriceCard';

export default function Home() {

    function getMaxWidthClass() {
        const screenWidth = window.innerWidth;
        const Desktop = null
        const Tablet = null
        const Phone = null

        if (screenWidth >= 1300) {
            Desktop = true 
        }
        else if ( screenWidth >= 1070) {
            Tablet = true
        } 
        else if (screenWidth < 1070) {
            Tablet = true
        }
    }

    return (
        <div class="w-full bg-background h-full flex flex-col items-center">
            <section className="home" class="bg-background flex flex-row justify-between items-start py-10 px-10 max-w-screen-xl w-full h-full">
                <div class="mr-10 flex flex-col max-w-xl">
                    <h1 class="font-impact text-text text-5xl bg-primary-default p-10 rounded ">Kompaktes Design<br></br>aus dem Glas</h1>
                    <p class="font-bodonimt text-text m-10 text-3xl">Wir gestallten eine visuelle Identität, die so klar und brilliant ist wie das Beste, was aus einem Glas kommt. Bringen Sie Ihr Geschäft auf das nächste Level des Designs</p>
                    <div class="flex flex-row">
                        <button class="font-bodonimt text-text text-3xl rounded bg-primary-default hover:bg-primary-600 px-5 py-3 mx-10 w-48 active:translate-y-1">
                            Hire Now
                        </button>
                        <button class="font-bodonimt text-text text-3xl rounded bg-secondary-default hover:bg-secondary-600 px-5 py-3 w-48 active:translate-y-1">
                            Meet us
                        </button>
                    </div>
                    <div class="flex flex-row justify-center items-center m-10 self-start">
                        <img src={mouse} class="h-7"></img>
                        <p class="font-bodonimt text-text ml-5 text-lg">Scroll to see more of us</p>
                    </div>
                </div>
                <div>
                    <img src={charachter} class=" w-min h-184 bg-primary-default p-10 rounded box-border"></img>
                </div>
            </section>
            <section className="home" class="bg-background flex flex-col justify-center items-center py-10 px-10 max-w-screen-xl w-full h-screen">
                <h1 class="text-text font-impact text-6xl">Warum Jars?</h1>
                <div class="flex items-center my-10 h-fit">
                    <WhyCard textIndex={0}></WhyCard>
                    <WhyCard textIndex={1}></WhyCard>
                    <WhyCard textIndex={2}></WhyCard>
                </div>
            </section>
            <section className="home" class="bg-background flex flex-col justify-center items-center py-10 px-10 max-w-screen-xl w-full h-screen">
                <div class="flex flex-col justify-center items-center">
                    <h1 class="text-text font-impact text-6xl">Pricing</h1>
                    <h2 class="text-text font-bodonimt text-xl">Schauen sie sich unsere Preispläne an!</h2>
                </div>
                <div class="flex items-center my-10 h-fit">
                    <PriceCard level={[0]}></PriceCard>
                    <PriceCard></PriceCard>
                    <PriceCard></PriceCard>
                </div>
            </section>
        </div>
    )
}