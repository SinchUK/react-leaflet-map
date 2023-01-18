


const Basemaps = ({basemap, onChange}) => {
    let bm;
    const onChangeMap = (e) => {
        bm = e.currentTarget.value;
        if (onChange) {
            onChange(bm);
        }
    }



    return (
        <div>
            <select className="basemaps-container" value={basemap} onChange={onChangeMap}>
                <option value="osm">OSM</option>
                <option value="hot">OSM HOT</option>
                <option value="dark">DARK</option>
                <option value="forest">FOREST</option>
            </select>
        </div>
    )
}


export default Basemaps;