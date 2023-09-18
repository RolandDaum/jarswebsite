export default function PriceCard( {level} ) {
    return (
        <div>
            <div>
                <img></img>
                <h2>Most Popular</h2>
            </div>
            <h1></h1>
            <h2>$0.00 / Projekt</h2>
            <div>
                <Offer></Offer>
                <Offer></Offer>
                <Offer></Offer>
                <Offer></Offer>

            </div>
        </div>
    )
}

function Offer() {
    const variations = [
        // {color: }
    ]

    return (
        <div>
            <img></img>
            <h1 class="">Nothing at all. Give us money</h1>
        </div>
    )
}