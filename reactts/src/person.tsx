export default interface Person {
    name : string;
    age : number;
    isMarried : boolean;
}
export default function Person(props: Person) {

return (
    <>
    <h1>I'm {props.name}, {props.age} years old and {props.isMarried ? "Married" : "not Married"}</h1>
    </>
)
}