import ReactCurvedText from "react-curved-text";

import publicheaderimage from "../../publicheaderimage.avif";
import nzimg from "../../nz.png";

function UnauthenticatedHeader(props: { loginWithRedirect: () => void; }) {
    return (
        <div className='UnauthenticatedHeader'>
            <div className="UnauthenticatedHeader__container">
                <button className='UnauthenticatedHeader__button' onClick={() => props.loginWithRedirect()}>Log in</button>
                <div className='UnauthenticatedHeader__title'>
                    <ReactCurvedText
                        width={630}
                        height={274}
                        cx={320}
                        cy={233}
                        rx={244}
                        ry={180}
                        startOffset={0}
                        reversed={true}
                        text='Artist Exchange Platform'
                        textProps={{ "style": { "fontSize": "57" } }}
                        textPathProps={{ "fill": "#ffffff" }}
                        tspanProps={{ "dy": "-6" }}
                        ellipseProps={undefined}
                        svgProps={{ "style": { "transform": "rotate(0deg)" } }} />
                    <div>
                        <div className='UnauthenticatedHeader__centerimage'>
                            <img src={publicheaderimage} />
                        </div>
                    </div>
                </div>
                <div className='UnauthenticatedHeader__nzimage UnauthenticatedHeader__nzimage--left'>
                    <img src={nzimg} />
                </div>
                <div className='UnauthenticatedHeader__nzimage UnauthenticatedHeader__nzimage--right'>
                    <img src={nzimg} />
                </div>
            </div>
        </div>
    );
}

export default UnauthenticatedHeader;