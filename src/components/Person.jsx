export function Person({name, age, city}) {
    console.log(name, age, city)
    return (
        <>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>City: {city}</p>
        </>
    )
}