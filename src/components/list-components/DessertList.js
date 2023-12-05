function DessertList(props){
    const dessertList = props.desserts
        .filter(d => d.calories <= 500)
        .sort((d1,d2) => d1.calories - d2.calories)
        .map(d => <li>{d.name} - {d.calories} cal</li>);
    return <ul>{dessertList}</ul>
}

export default DessertList;