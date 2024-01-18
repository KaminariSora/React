const display = () => {
    return (
        <div className="container">
            <div className="result">
                <h1>0</h1>
            </div>
            <div className="buttons">
                <div className="number">
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>

                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>

                    <button>.</button>
                    <button>0</button>
                    <button>=</button>
                </div>
                <div className="operation">
                    <button>+</button>
                    <button>-</button>
                    <button>*</button>
                    <button>/</button>
                    <button>clear</button>
                </div>
            </div>
        </div>
    )
}

export default display