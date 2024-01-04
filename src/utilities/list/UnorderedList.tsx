interface Props {
    list: string[];
    name: string;
}

export default function UnorderedList({list, name}: Props) {

    console.debug("list", list, "name", name);
    let idx = 0;
    const newList = list.map(x => <li key={++idx}>{x}</li>);
    console.debug("newList", newList);

    return (
        <>
            <h5>Errors:</h5>
            <ul style={{ color: 'red' }}>{newList}</ul>
        </>
    )
}