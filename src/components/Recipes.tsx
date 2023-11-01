import { useParams } from "react-router-dom";

const Recipes = () => {
    const { recipe } = useParams();
    const recipes = [
        {
            name: "curry",
            ingredients: "rice, curry powder, ...",
        },
        {
            name: "humberger",
            ingredients: "wheat, meat, ...",
        },
    ];
    console.log(recipe);
    const target = recipes.find((r) => r.name === recipe);
    return (
        <>
            <h1>{target?.name}</h1>
            <p>{target?.ingredients}</p>
        </>
    );
};

export default Recipes;
