const Potions = (props) => {
    const potionInfo = {
        range: "https://oldschool.runescape.wiki/images/6/6f/Ranging_potion%284%29.png?71375",
        superCombat: "https://oldschool.runescape.wiki/images/8/82/Super_combat_potion%284%29.png?dc66c",
        overload: "https://oldschool.runescape.wiki/images/e/e5/Overload_%28%2B%29%284%29.png?6b1dd",
        heart: "https://oldschool.runescape.wiki/images/f/fe/Imbued_heart.png?b33a3"
    }

    const potions = [potionInfo.range, potionInfo.superCombat, potionInfo.overload, potionInfo.heart];

    return (
        <>
            <div className="options-label">
                Potion Boosts
            </div>
            <div className="test-box">
                {potions.map((src, index) => {
                    return (
                        <div className="container" key={index}>
                            <input class="form-check-input" type="checkbox" name="exampleRadios" id="scb-image" value="option2"></input>
                            <img className="checkbox-image" src={src} alt=""></img>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Potions