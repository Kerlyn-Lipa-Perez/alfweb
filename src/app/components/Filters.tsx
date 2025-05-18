
export function Filters() {
    return (
        <section className="flex justify-center  p-5 content-between font-bold ">
            <div className="flex gap-4">
                <label htmlFor="price">Precio</label>
                <input
                    type='range'
                    id='price'
                    min={0}
                    max={1000} 
                    />
            </div>
            <div>
                <label htmlFor="price">Categoria</label>
                <select value='all'>Todas</select>
                
            </div>
            
        </section>
    )
}
