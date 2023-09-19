import stars from '../assets/ratingstars.png'
import profPic0 from '../assets/profPic0.png'
import profPic1 from '../assets/profPic1.png'
import profPic2 from '../assets/profPic2.png'


export default function RatingCard( {Userindex} ) {
    const content = [
        {Username: 'Cooler User', Subname: 'Head Designer', ProfPic: profPic0, Text: '“Jars hat meine Erwartungen übertroffen! Das Team war äußerst kreativ, effizient und freundlich. Sie haben unsere Marke wirklich zum Strahlen gebracht.”'},
        {Username: 'Cooler User 2', Subname: 'Head Customer', ProfPic: profPic1, Text: '“Jars ist einfach fantastisch! Sie haben unsere Vision perfekt erfasst und in ein beeindruckendes Corporate Design verwandelt. Die Zusammenarbeit war reibungslos.”'},
        {Username: 'Cooler User 3', Subname: 'Head Dad', ProfPic: profPic2, Text: '“Jars verdient ohne Zweifel volle 5 Sterne! Das Team hat unsere Erwartungen bei weitem übertroffen. Sie waren nicht nur äußerst kreativ und professionell, sondern auch äußerst zuverlässig.”'},
    ]

    return(
        <div class="bg-secondary-default bg-opacity-25 rounded flex flex-col justify-start items-start p-10 mx-5">
            <div class="flex flex-row justify-start items-center">
                <img src={content[Userindex].ProfPic} class="pr-5"></img>
                <div class="flex flex-col justify-center items-start font-bodonimt text-text">
                    <h1 class=" text-3xl">{content[Userindex].Username}</h1>
                    <p class="text-lg">{content[Userindex].Subname}</p>
                </div>
            </div>
            <img src={stars} class="py-5 w-40"></img>
            <p class="font-bodonimt text-text text-2xl hyphens-auto" lang='de'>{content[Userindex].Text}</p>
        </div>
    )
}