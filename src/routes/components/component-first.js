

const ComponentFirst = () => {


    const styles = {
        container: {
            padding: '20px',
            backgroundColor: '#f0f0f0',
            borderRadius: '10px',
            fontFamily: 'Arial, sans-serif'
        },
        heading: {
            color: '#333',
            marginBottom: '10px'
        },
        paragraph: {
            color: '#666',
            lineHeight: '1.5'
        },
        button: {
            backgroundColor: '#007BFF',
            color: '#fff',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer'
        },
        list: {
            marginTop: '10px',
            paddingLeft: '20px'
        },
        listItem: {
            marginBottom: '5px'
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Welcome to the Dummy Component</h1>
            <p style={styles.paragraph}>
                This is a paragraph within the dummy component. It contains some example text to illustrate how text
                appears within this component.
            </p>
            <h2 style={styles.heading}>Subheading</h2>
            <p style={styles.paragraph}>
                Here is another paragraph under a subheading. It provides additional information and context.
            </p>
            <h3 style={styles.heading}>List of Items</h3>
            <ul style={styles.list}>
                <li style={styles.listItem}>Item 1: This is the first item in the list.</li>
                <li style={styles.listItem}>Item 2: This is the second item, providing more detail.</li>
                <li style={styles.listItem}>Item 3: This is the third item in the list.</li>
            </ul>
            <button style={styles.button}>Click Me!</button>
        </div>


    )
}

export default ComponentFirst;