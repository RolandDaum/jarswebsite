import React from 'react'

import check100 from '../assets/check100.png'
import check50 from '../assets/check50.png'
import star from '../assets/popStar.png'

export default function PriceCard( {levelIndex} ) {
    const lvl = [
        [false,true,false,false,false,'Basic'],
        [true,true,true,true,false,'Pro'],
        [false,true,true,true,true,'Enterprise']
    ]
    return (
        <div class=" even:bg-primary-500 odd:bg-secondary-500 even:bg-opacity-50 odd:bg-opacity-25 p-5 mx-5 roudned flex flex-col justify-end items-center TBP:min-w-full TBP:snap-center TBP:w-full">
            {lvl[levelIndex][0] ? (
                <div class="flex flex-row justify-center items-center">
                    <img src={star} class="h-5"></img>
                    <h2 class="text-accent ml-3 font-bodonimt text-lg">Most Popular</h2>
                </div>
            ) : null}
            <h1 class=" font-impact text-3xl m-5 text-text">{lvl[levelIndex][5]}</h1>
            <h2 class="font-bodonimt m-3 text-xl text-text">$0.00 / Projekt</h2>
            <div class="flex flex-col justify-start items-center">
                <Offer op={lvl[levelIndex][1]}></Offer>
                <Offer op={lvl[levelIndex][2]}></Offer>
                <Offer op={lvl[levelIndex][3]}></Offer>
                <Offer op={lvl[levelIndex][4]}></Offer>
            </div>
        </div>
    )
}

function Offer({ op }) {
    return (
        <div class="flex flex-row justify-center items-center py-4">
            {op ? (
                <>
                    <img src={check100} class="h-7"/>
                    <h1 class=" text-text ml-5 font-bodonimt text-xl">Nothing at all. Give us money!</h1>
                </>
            ) : (
                <div class="flex flex-row justify-center items-center">
                    <img src={check50} class="h-7"/>
                    <h1 class=" text-text opacity-50 ml-5 font-bodonimt text-xl">Nothing at all. Give us money!</h1>
                </div>
            )}
        </div>
    );
}
