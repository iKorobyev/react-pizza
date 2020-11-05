import ContentLoader from "react-content-loader"

function LoadingBlock() {
    return <ContentLoader
        className='pizza-block'
        speed={1}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <circle cx="136" cy="127" r="119" />
        <rect x="0" y="262" rx="6" ry="6" width="280" height="26" />
        <rect x="0" y="310" rx="6" ry="6" width="275" height="76" />
        <rect x="1" y="413" rx="6" ry="6" width="88" height="32" />
        <rect x="136" y="408" rx="20" ry="20" width="138" height="44" />
    </ContentLoader>
}

export default LoadingBlock;