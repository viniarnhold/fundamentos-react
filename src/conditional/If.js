/*
    <If test={exemple}>
        <span>...</span>
        <span>...</span>
        <span>...</span>
    </If>
*/
const If = (props) => {
    if (props.teste) {
        return props.children;
    } else {
        return false;
    }
}

export default If;