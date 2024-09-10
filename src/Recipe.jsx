
function Recipe({drinkers}) {
    return (
        <ol>
            <li>Boil {drinkers} cups of water</li>
            <li>Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice</li>
            <li>Add { 0.5 * drinkers} cups of milk to boil</li>
        </ol>
    )
}

export default Recipe