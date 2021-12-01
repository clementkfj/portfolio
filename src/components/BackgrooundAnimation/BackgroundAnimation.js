import { color } from '@mui/system';
import React from 'react';
import {useState, useEffect} from 'react';
import { animated, useSpring } from 'react-spring';

function useAnimationPath({toggle, delay}) {
  const [length, setLength] = useState(null);
  const animatedStyle = useSpring({
    // We are not using StrokeDashArray
    strokeDasharray: length,
    strokeDashoffset: toggle ? 0 : length
  });
  return {
    style: animatedStyle,
      ref: (ref) => {
        if (ref) {
          setLength(ref.getTotalLength());
        }
      }
  }
}

function ColouredArea({color, toggle}) {
  const animationStrokeProps = useAnimationPath({toggle});
  const animationFillStyle = useSpring({
    fill: toggle ? color : "#0F1624",
    delay: 500
  });
  return (
    <animated.path
      style={{
        ...animationStrokeProps.style,
        ...animationFillStyle
      }}
      d="M502.109 357.9L437.529 395.185L423.507 403.283V312.519L502.109 357.9ZM423.507 520.037V420.609L445.032 408.181L509.613 370.896V470.323L423.507 520.037ZM120.167 433.105V420.609L141.693 408.181L206.273 370.896V420.749C206.273 424.893 209.633 428.252 213.777 428.252C217.92 428.252 221.28 424.893 221.28 420.749V357.9C221.28 355.219 219.849 352.743 217.528 351.401L120.167 295.192V245.476L217.528 189.264C219.849 187.924 221.28 185.447 221.28 182.767V169.848C221.28 165.704 217.92 162.345 213.777 162.345C209.633 162.345 206.273 165.704 206.273 169.848V178.435L120.167 228.148V153.579V153.203H408.5V153.579V228.148L322.393 178.435V169.848C322.393 165.704 319.035 162.345 314.891 162.345C310.747 162.345 307.387 165.704 307.387 169.848V182.767C307.387 185.447 308.817 187.924 311.139 189.264L408.5 245.476V295.192L311.139 351.401C308.817 352.743 307.387 355.219 307.387 357.9V420.14C307.387 424.285 310.747 427.644 314.891 427.644C319.035 427.644 322.393 424.285 322.393 420.14V370.896L386.973 408.181L408.5 420.609V433.105H120.167ZM19.0546 370.896L83.6333 408.181L105.16 420.609V520.037L19.0546 470.323V370.896ZM105.16 312.519V403.283L91.1373 395.185L26.5573 357.9L105.16 312.519ZM19.0546 79.0067L83.6333 116.293L105.16 128.721V228.148L19.0546 178.435V79.0067ZM112.664 16.2974L198.771 66.012L134.191 103.297L112.664 115.725L91.1373 103.297L26.5573 66.012L112.664 16.2974ZM134.191 395.185L120.167 403.283V312.519L198.771 357.9L134.191 395.185ZM416.004 16.2974L502.109 66.012L437.529 103.297L416.004 115.725L394.476 103.297L329.897 66.012L416.004 16.2974ZM423.507 228.148V128.721L445.032 116.293L509.613 79.0067V178.435L423.507 228.148ZM329.897 357.9L408.5 312.519V403.283L394.476 395.185L329.897 357.9ZM520.867 189.264C523.189 187.924 524.62 185.447 524.62 182.767V66.012C524.62 63.332 523.189 60.8547 520.867 59.5134L419.755 1.13604C417.433 -0.20529 414.573 -0.20529 412.251 1.13604L311.139 59.5134C308.817 60.8547 307.387 63.332 307.387 66.012V121.855C307.387 125.999 310.747 129.359 314.891 129.359C319.035 129.359 322.393 125.999 322.393 121.855V79.0067L386.973 116.293L408.5 128.721V138.196H120.167V128.721L141.693 116.293L206.273 79.0067V121.855C206.273 125.999 209.633 129.359 213.777 129.359C217.92 129.359 221.28 125.999 221.28 121.855V66.012C221.28 63.332 219.849 60.8547 217.528 59.5134L116.415 1.13604C114.093 -0.20529 111.233 -0.20529 108.912 1.13604L7.79864 59.5134C5.47731 60.8547 4.04797 63.332 4.04797 66.012V182.767C4.04797 185.447 5.47731 187.924 7.79864 189.264L105.16 245.476V295.192L7.79864 351.401C5.47731 352.743 4.04797 355.219 4.04797 357.9V474.655C4.04797 477.335 5.47731 479.811 7.79864 481.152L108.912 539.531C110.072 540.2 111.368 540.536 112.664 540.536C113.959 540.536 115.255 540.2 116.415 539.531L217.528 481.152C219.849 479.811 221.28 477.335 221.28 474.655V462.667C221.28 458.524 217.92 455.164 213.777 455.164C209.633 455.164 206.273 458.524 206.273 462.667V470.323L120.167 520.037V448.112H408.5V520.037L322.393 470.323V463.273C322.393 459.131 319.035 455.771 314.891 455.771C310.747 455.771 307.387 459.131 307.387 463.273V474.655C307.387 477.335 308.817 479.811 311.139 481.152L412.251 539.531C413.413 540.2 414.708 540.536 416.004 540.536C417.299 540.536 418.593 540.2 419.755 539.531L520.867 481.152C523.189 479.811 524.62 477.335 524.62 474.655V357.9C524.62 355.219 523.189 352.743 520.867 351.401L423.507 295.192V245.476L520.867 189.264Z"
      fill={color}
    />
  )
}

function Lines({toggle}) {
  const animatedProps = useAnimationPath({toggle});
  return (
    <animated.path
      {...animatedProps}
      d="M502.109 357.9L437.529 395.185L423.507 403.283V312.519L502.109 357.9ZM423.507 520.037V420.609L445.032 408.181L509.613 370.896V470.323L423.507 520.037ZM120.167 433.105V420.609L141.693 408.181L206.273 370.896V420.749C206.273 424.893 209.633 428.252 213.777 428.252C217.92 428.252 221.28 424.893 221.28 420.749V357.9C221.28 355.219 219.849 352.743 217.528 351.401L120.167 295.192V245.476L217.528 189.264C219.849 187.924 221.28 185.447 221.28 182.767V169.848C221.28 165.704 217.92 162.345 213.777 162.345C209.633 162.345 206.273 165.704 206.273 169.848V178.435L120.167 228.148V153.579V153.203H408.5V153.579V228.148L322.393 178.435V169.848C322.393 165.704 319.035 162.345 314.891 162.345C310.747 162.345 307.387 165.704 307.387 169.848V182.767C307.387 185.447 308.817 187.924 311.139 189.264L408.5 245.476V295.192L311.139 351.401C308.817 352.743 307.387 355.219 307.387 357.9V420.14C307.387 424.285 310.747 427.644 314.891 427.644C319.035 427.644 322.393 424.285 322.393 420.14V370.896L386.973 408.181L408.5 420.609V433.105H120.167ZM19.0546 370.896L83.6333 408.181L105.16 420.609V520.037L19.0546 470.323V370.896ZM105.16 312.519V403.283L91.1373 395.185L26.5573 357.9L105.16 312.519ZM19.0546 79.0067L83.6333 116.293L105.16 128.721V228.148L19.0546 178.435V79.0067ZM112.664 16.2974L198.771 66.012L134.191 103.297L112.664 115.725L91.1373 103.297L26.5573 66.012L112.664 16.2974ZM134.191 395.185L120.167 403.283V312.519L198.771 357.9L134.191 395.185ZM416.004 16.2974L502.109 66.012L437.529 103.297L416.004 115.725L394.476 103.297L329.897 66.012L416.004 16.2974ZM423.507 228.148V128.721L445.032 116.293L509.613 79.0067V178.435L423.507 228.148ZM329.897 357.9L408.5 312.519V403.283L394.476 395.185L329.897 357.9ZM520.867 189.264C523.189 187.924 524.62 185.447 524.62 182.767V66.012C524.62 63.332 523.189 60.8547 520.867 59.5134L419.755 1.13604C417.433 -0.20529 414.573 -0.20529 412.251 1.13604L311.139 59.5134C308.817 60.8547 307.387 63.332 307.387 66.012V121.855C307.387 125.999 310.747 129.359 314.891 129.359C319.035 129.359 322.393 125.999 322.393 121.855V79.0067L386.973 116.293L408.5 128.721V138.196H120.167V128.721L141.693 116.293L206.273 79.0067V121.855C206.273 125.999 209.633 129.359 213.777 129.359C217.92 129.359 221.28 125.999 221.28 121.855V66.012C221.28 63.332 219.849 60.8547 217.528 59.5134L116.415 1.13604C114.093 -0.20529 111.233 -0.20529 108.912 1.13604L7.79864 59.5134C5.47731 60.8547 4.04797 63.332 4.04797 66.012V182.767C4.04797 185.447 5.47731 187.924 7.79864 189.264L105.16 245.476V295.192L7.79864 351.401C5.47731 352.743 4.04797 355.219 4.04797 357.9V474.655C4.04797 477.335 5.47731 479.811 7.79864 481.152L108.912 539.531C110.072 540.2 111.368 540.536 112.664 540.536C113.959 540.536 115.255 540.2 116.415 539.531L217.528 481.152C219.849 479.811 221.28 477.335 221.28 474.655V462.667C221.28 458.524 217.92 455.164 213.777 455.164C209.633 455.164 206.273 458.524 206.273 462.667V470.323L120.167 520.037V448.112H408.5V520.037L322.393 470.323V463.273C322.393 459.131 319.035 455.771 314.891 455.771C310.747 455.771 307.387 459.131 307.387 463.273V474.655C307.387 477.335 308.817 479.811 311.139 481.152L412.251 539.531C413.413 540.2 414.708 540.536 416.004 540.536C417.299 540.536 418.593 540.2 419.755 539.531L520.867 481.152C523.189 479.811 524.62 477.335 524.62 474.655V357.9C524.62 355.219 523.189 352.743 520.867 351.401L423.507 295.192V245.476L520.867 189.264Z"
      stroke="black"
      stroke-width="2"
      mask="url(#path-1-inside-1_0_1)"x
    />
  )
}

function CircularColour({toggle, color}) {
  const animatedStrokeProps = useAnimationPath({toggle});
  const animatedFillStyle = useSpring({
    fill: toggle ? color : "#0F1624",
    delay: 500
  });
  return (
    <animated.path
      style={{
        ...animatedStrokeProps.style,
        ...animatedFillStyle
      }}
      d="M264.333 614.076C125.751 614.076 13.4067 601.203 13.4067 585.324C13.4067 569.445 125.751 556.573 264.333 556.573C402.917 556.573 515.26 569.445 515.26 585.324C515.26 601.203 402.917 614.076 264.333 614.076"
      fill={color}
    />
  )
}

function CircularLines({toggle}) {
  const animatedProps = useAnimationPath({toggle})
  return (
    <animated.path 
      {...animatedProps}
      d="M264.333 615.076C195.016 615.076 132.245 611.857 86.7877 606.648C64.0657 604.044 45.634 600.94 32.8643 597.481C26.4873 595.753 21.4651 593.922 18.0161 591.991C16.292 591.026 14.9126 590.009 13.9538 588.927C12.9896 587.839 12.4067 586.632 12.4067 585.324H14.4067C14.4067 586.001 14.7014 586.755 15.4505 587.6C16.2051 588.452 17.3746 589.34 18.9932 590.246C22.2293 592.058 27.0666 593.838 33.3873 595.55C46.0128 598.97 64.3285 602.061 87.0153 604.661C132.376 609.859 195.068 613.076 264.333 613.076V615.076ZM12.4067 585.324C12.4067 584.016 12.9896 582.809 13.9538 581.721C14.9126 580.639 16.2921 579.623 18.0161 578.657C21.4651 576.726 26.4873 574.895 32.8643 573.168C45.634 569.709 64.0657 566.604 86.7877 564.001C132.245 558.792 195.016 555.573 264.333 555.573V557.573C195.068 557.573 132.376 560.79 87.0153 565.988C64.3285 568.587 46.0128 571.678 33.3872 575.098C27.0666 576.81 22.2293 578.59 18.9932 580.402C17.3746 581.309 16.2051 582.196 15.4505 583.048C14.7014 583.893 14.4067 584.647 14.4067 585.324H12.4067ZM264.333 555.573C333.651 555.573 396.422 558.792 441.879 564.001C464.601 566.604 483.033 569.709 495.803 573.168C502.179 574.895 507.202 576.726 510.651 578.657C512.375 579.623 513.754 580.639 514.713 581.721C515.677 582.809 516.26 584.016 516.26 585.324H514.26C514.26 584.647 513.965 583.893 513.216 583.048C512.462 582.196 511.292 581.309 509.674 580.402C506.437 578.59 501.6 576.81 495.28 575.098C482.654 571.678 464.339 568.587 441.652 565.988C396.292 560.79 333.6 557.573 264.333 557.573V555.573ZM516.26 585.324C516.26 586.632 515.677 587.839 514.713 588.927C513.754 590.009 512.375 591.026 510.651 591.991C507.202 593.922 502.179 595.753 495.803 597.481C483.033 600.94 464.601 604.044 441.879 606.648C396.422 611.857 333.651 615.076 264.333 615.076V613.076C333.6 613.076 396.292 609.859 441.652 604.661C464.339 602.061 482.654 598.97 495.28 595.55C501.6 593.838 506.437 592.058 509.674 590.246C511.292 589.34 512.462 588.452 513.216 587.6C513.965 586.755 514.26 586.001 514.26 585.324H516.26Z" 
      fill="black"
      mask="url(#path-2-inside-2_0_1)"
    />
  )
}

function BackgroundAnimation() {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {

    setImmediate(() => {
      setToggle(true);
    });
  }, []);
  return (
  <div>
    <svg width="394.5" height="394.5" viewBox="0 0 529 623" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="bc_060861_03 1">
        <g id="g10" filter="url(#filter0_d_0_1)">
          <g id="g12">
            <g id="g16">
              <g id="g18">
                <g id="path30" filter="url(#filter1_d_0_1)">
                  <mask id="path-1-inside-1_0_1" fill="white">
                    <path
                      d="M502.109 357.9L437.529 395.185L423.507 403.283V312.519L502.109 357.9ZM423.507 520.037V420.609L445.032 408.181L509.613 370.896V470.323L423.507 520.037ZM120.167 433.105V420.609L141.693 408.181L206.273 370.896V420.749C206.273 424.893 209.633 428.252 213.777 428.252C217.92 428.252 221.28 424.893 221.28 420.749V357.9C221.28 355.219 219.849 352.743 217.528 351.401L120.167 295.192V245.476L217.528 189.264C219.849 187.924 221.28 185.447 221.28 182.767V169.848C221.28 165.704 217.92 162.345 213.777 162.345C209.633 162.345 206.273 165.704 206.273 169.848V178.435L120.167 228.148V153.579V153.203H408.5V153.579V228.148L322.393 178.435V169.848C322.393 165.704 319.035 162.345 314.891 162.345C310.747 162.345 307.387 165.704 307.387 169.848V182.767C307.387 185.447 308.817 187.924 311.139 189.264L408.5 245.476V295.192L311.139 351.401C308.817 352.743 307.387 355.219 307.387 357.9V420.14C307.387 424.285 310.747 427.644 314.891 427.644C319.035 427.644 322.393 424.285 322.393 420.14V370.896L386.973 408.181L408.5 420.609V433.105H120.167ZM19.0546 370.896L83.6333 408.181L105.16 420.609V520.037L19.0546 470.323V370.896ZM105.16 312.519V403.283L91.1373 395.185L26.5573 357.9L105.16 312.519ZM19.0546 79.0067L83.6333 116.293L105.16 128.721V228.148L19.0546 178.435V79.0067ZM112.664 16.2974L198.771 66.012L134.191 103.297L112.664 115.725L91.1373 103.297L26.5573 66.012L112.664 16.2974ZM134.191 395.185L120.167 403.283V312.519L198.771 357.9L134.191 395.185ZM416.004 16.2974L502.109 66.012L437.529 103.297L416.004 115.725L394.476 103.297L329.897 66.012L416.004 16.2974ZM423.507 228.148V128.721L445.032 116.293L509.613 79.0067V178.435L423.507 228.148ZM329.897 357.9L408.5 312.519V403.283L394.476 395.185L329.897 357.9ZM520.867 189.264C523.189 187.924 524.62 185.447 524.62 182.767V66.012C524.62 63.332 523.189 60.8547 520.867 59.5134L419.755 1.13604C417.433 -0.20529 414.573 -0.20529 412.251 1.13604L311.139 59.5134C308.817 60.8547 307.387 63.332 307.387 66.012V121.855C307.387 125.999 310.747 129.359 314.891 129.359C319.035 129.359 322.393 125.999 322.393 121.855V79.0067L386.973 116.293L408.5 128.721V138.196H120.167V128.721L141.693 116.293L206.273 79.0067V121.855C206.273 125.999 209.633 129.359 213.777 129.359C217.92 129.359 221.28 125.999 221.28 121.855V66.012C221.28 63.332 219.849 60.8547 217.528 59.5134L116.415 1.13604C114.093 -0.20529 111.233 -0.20529 108.912 1.13604L7.79864 59.5134C5.47731 60.8547 4.04797 63.332 4.04797 66.012V182.767C4.04797 185.447 5.47731 187.924 7.79864 189.264L105.16 245.476V295.192L7.79864 351.401C5.47731 352.743 4.04797 355.219 4.04797 357.9V474.655C4.04797 477.335 5.47731 479.811 7.79864 481.152L108.912 539.531C110.072 540.2 111.368 540.536 112.664 540.536C113.959 540.536 115.255 540.2 116.415 539.531L217.528 481.152C219.849 479.811 221.28 477.335 221.28 474.655V462.667C221.28 458.524 217.92 455.164 213.777 455.164C209.633 455.164 206.273 458.524 206.273 462.667V470.323L120.167 520.037V448.112H408.5V520.037L322.393 470.323V463.273C322.393 459.131 319.035 455.771 314.891 455.771C310.747 455.771 307.387 459.131 307.387 463.273V474.655C307.387 477.335 308.817 479.811 311.139 481.152L412.251 539.531C413.413 540.2 414.708 540.536 416.004 540.536C417.299 540.536 418.593 540.2 419.755 539.531L520.867 481.152C523.189 479.811 524.62 477.335 524.62 474.655V357.9C524.62 355.219 523.189 352.743 520.867 351.401L423.507 295.192V245.476L520.867 189.264Z"
                    />
                  </mask>
                  {/* <ColouredArea color="url(#paint0_linear_0_1)"/> */}
                  <ColouredArea color="#73cbd5" toggle={toggle}/>
                  <Lines toggle={toggle}/>
                </g>
              </g>
            </g>
            <g id="g32">
              <g id="g34">
                <g id="path46" filter="url(#filter2_d_0_1)">
                  <mask id="path-2-inside-2_0_1" fill="white">
                    <path d="M264.333 614.076C125.751 614.076 13.4067 601.203 13.4067 585.324C13.4067 569.445 125.751 556.573 264.333 556.573C402.917 556.573 515.26 569.445 515.26 585.324C515.26 601.203 402.917 614.076 264.333 614.076"/>
                  </mask>
                  {/* <CircularColour color="url(#paint1_radial_0_1)" toggle={toggle} /> */}
                  <CircularColour color="#73cbd5" toggle={toggle}/>
                  <CircularLines toggle={toggle}/>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
      <defs>
        <filter id="filter0_d_0_1" x="0.0479736" y="0.130035" width="528.572" height="621.946" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
        </filter>
        <filter id="filter1_d_0_1" x="0.0479736" y="0.130035" width="528.572" height="548.406" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
        </filter>
        <filter id="filter2_d_0_1" x="9.40668" y="556.573" width="509.853" height="65.5027" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
        </filter>
        <linearGradient id="paint0_linear_0_1" x1="513.439" y1="59.1654" x2="-8.78266" y2="501.853" gradientUnits="userSpaceOnUse">
          <stop stop-color="#50B2E8"/>
          <stop offset="1" stop-color="#5E2790"/>
        </linearGradient>
        <radialGradient id="paint1_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(264.333 585.324) scale(250.927 28.7513)">
          <stop stop-color="#8E8F8E"/>
          <stop offset="1" stop-color="#F6F6F6"/>
        </radialGradient>
      </defs>
    </svg>
    {/* <svg
      className="BgAnimation__svg"
      viewBox="0 0 602 602"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.15">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M201.337 87.437C193.474 79.5738 180.725 79.5738 172.862 87.437L87.437 172.862C79.5739 180.725 79.5739 193.474 87.437 201.337L400.663 514.563C408.526 522.426 421.275 522.426 429.138 514.563L514.563 429.138C522.426 421.275 522.426 408.526 514.563 400.663L201.337 87.437ZM30.4869 115.912C-8.82897 155.228 -8.82897 218.972 30.4869 258.287L343.713 571.513C383.028 610.829 446.772 610.829 486.088 571.513L571.513 486.088C610.829 446.772 610.829 383.028 571.513 343.713L258.287 30.4869C218.972 -8.82896 155.228 -8.82896 115.912 30.4869L30.4869 115.912Z"
          stroke="url(#paint0_radial)"
          id="path_0"
        />
        <path
          d="M514.563 201.337C522.426 193.474 522.426 180.725 514.563 172.862L429.138 87.437C421.275 79.5738 408.526 79.5739 400.663 87.437L358.098 130.002L301.148 73.0516L343.713 30.4869C383.028 -8.82896 446.772 -8.82896 486.088 30.4869L571.513 115.912C610.829 155.228 610.829 218.972 571.513 258.287L357.802 471.999L300.852 415.049L514.563 201.337Z"
          stroke="url(#paint1_radial)"
          id="path_1"
        />
        <path
          d="M243.901 471.999L201.337 514.563C193.474 522.426 180.725 522.426 172.862 514.563L87.437 429.138C79.5739 421.275 79.5739 408.526 87.437 400.663L301.148 186.952L244.198 130.002L30.4869 343.713C-8.82897 383.028 -8.82897 446.772 30.4869 486.088L115.912 571.513C155.228 610.829 218.972 610.829 258.287 571.513L300.852 528.949L243.901 471.999Z"
          stroke="url(#paint2_radial)"
          id="path_2"
        />
      </g>
      <ellipse
        cx="295.027"
        cy="193.118"
        transform="translate(-295.027 -193.118)"
        rx="1.07306"
        ry="1.07433"
        fill="#945DD6"
      >
        <animateMotion dur="10s" repeatCount="indefinite" rotate="auto">
          <mpath xlinkHref="#path_2" />
        </animateMotion>
      </ellipse>
      <path
        d="M294.685 193.474L268.932 219.258"
        transform="translate(-294.685 -193.474) rotate(45 294.685 193.474)"
        stroke="url(#paint3_linear)"
      >
        <animateMotion dur="10s" repeatCount="indefinite" rotate="auto">
          <mpath xlinkHref="#path_2" />
        </animateMotion>
      </path>
      <ellipse
        cx="295.027"
        cy="193.118"
        transform="translate(-295.027 -193.118)"
        rx="1.07306"
        ry="1.07433"
        fill="#46737"
      >
        <animateMotion
          dur="5s"
          begin="1"
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath xlinkHref="#path_2" />
        </animateMotion>
      </ellipse>
      <path
        d="M294.685 193.474L268.932 219.258"
        transform="translate(-294.685 -193.474) rotate(45 294.685 193.474)"
        stroke="url(#paint7_linear)"
      >
        <animateMotion
          dur="5s"
          begin="1"
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath xlinkHref="#path_2" />
        </animateMotion>
      </path>
      <ellipse
        cx="476.525"
        cy="363.313"
        rx="1.07433"
        ry="1.07306"
        transform="translate(-476.525 -363.313) rotate(90 476.525 363.313)"
        fill="#945DD6"
      >
        <animateMotion dur="10s" repeatCount="indefinite" rotate="auto">
          <mpath xlinkHref="#path_0" />
        </animateMotion>
      </ellipse>
      <path
        d="M476.171 362.952L450.417 337.168"
        transform="translate(-476.525 -363.313) rotate(-45 476.171 362.952)"
        stroke="url(#paint4_linear)"
      >
        <animateMotion dur="10s" repeatCount="indefinite" rotate="auto">
          <mpath xlinkHref="#path_0" />
        </animateMotion>
      </path>
      <ellipse
        cx="382.164"
        cy="155.029"
        rx="1.07433"
        ry="1.07306"
        transform="translate(-382.164 -155.029) rotate(90 382.164 155.029)"
        fill="#F46737"
      >
        <animateMotion
          dur="10s"
          begin="1"
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath xlinkHref="#path_0" />
        </animateMotion>
      </ellipse>
      <path
        d="M381.81 154.669L356.057 128.885"
        transform="translate(-381.81 -154.669) rotate(-45 381.81 154.669)"
        stroke="url(#paint5_linear)"
      >
        <animateMotion
          dur="10s"
          begin="1"
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath xlinkHref="#path_0" />
        </animateMotion>
      </path>
      <ellipse
        cx="333.324"
        cy="382.691"
        rx="1.07306"
        ry="1.07433"
        transform="translate(-333.324 -382.691) rotate(-180 333.324 382.691)"
        fill="#F46737"
      >
        <animateMotion
          dur="5s"
          begin="0"
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath xlinkHref="#path_1" />
        </animateMotion>
      </ellipse>
      <path
        d="M333.667 382.335L359.42 356.551"
        transform="scale(-1 1) translate(-333.667 -382.335) rotate(45 333.667 382.335)"
        stroke="url(#paint6_linear)"
      >
        <animateMotion
          dur="5s"
          begin="0"
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath xlinkHref="#path_1" />
        </animateMotion>
      </path>
      <ellipse
        cx="165.524"
        cy="93.9596"
        rx="1.07306"
        ry="1.07433"
        transform="translate(-165.524 -93.9596)"
        fill="#F46737"
      >
        <animateMotion
          dur="10s"
          begin="3"
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath xlinkHref="#path_0" />
        </animateMotion>
      </ellipse>
      <path
        d="M165.182 94.3159L139.429 120.1"
        transform="translate(-165.182 -94.3159) rotate(45 165.182 94.3159)"
        stroke="url(#paint7_linear)"
      >
        <animateMotion
          dur="10s"
          begin="3"
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath xlinkHref="#path_0" />
        </animateMotion>
      </path>
      <ellipse
        cx="476.525"
        cy="363.313"
        rx="1.07433"
        ry="1.07306"
        transform="translate(-476.525 -363.313) rotate(90 476.525 363.313)"
        fill="#13ADC7"
      >
        <animateMotion
          dur="12s"
          begin="4"
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath xlinkHref="#path_0" />
        </animateMotion>
      </ellipse>
      <path
        d="M476.171 362.952L450.417 337.168"
        transform="translate(-476.525 -363.313) rotate(-45 476.171 362.952)"
        stroke="url(#paint11_linear)"
      >
        <animateMotion
          dur="12s"
          begin="4"
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath xlinkHref="#path_0" />
        </animateMotion>
      </path>
      <defs>
        <radialGradient
          id="paint0_radial"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(301 301) rotate(90) scale(300)"
        >
          <stop offset="0.333333" stopColor="#FBFBFB" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint1_radial"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(301 301) rotate(90) scale(300)"
        >
          <stop offset="0.333333" stopColor="#FBFBFB" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint2_radial"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(301 301) rotate(90) scale(300)"
        >
          <stop offset="0.333333" stopColor="#FBFBFB" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <linearGradient
          id="paint3_linear"
          x1="295.043"
          y1="193.116"
          x2="269.975"
          y2="218.154"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#945DD6" />
          <stop offset="1" stopColor="#945DD6" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint4_linear"
          x1="476.529"
          y1="363.31"
          x2="451.461"
          y2="338.272"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#945DD6" />
          <stop offset="1" stopColor="#945DD6" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint5_linear"
          x1="382.168"
          y1="155.027"
          x2="357.1"
          y2="129.989"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F46737" />
          <stop offset="1" stopColor="#F46737" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint6_linear"
          x1="333.309"
          y1="382.693"
          x2="358.376"
          y2="357.655"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F46737" />
          <stop offset="1" stopColor="#F46737" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint7_linear"
          x1="165.54"
          y1="93.9578"
          x2="140.472"
          y2="118.996"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F46737" />
          <stop offset="1" stopColor="#F46737" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint8_linear"
          x1="414.367"
          y1="301.156"
          x2="439.435"
          y2="276.118"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#13ADC7" />
          <stop offset="1" stopColor="#13ADC7" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint9_linear"
          x1="515.943"
          y1="288.238"
          x2="541.339"
          y2="291.454"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#13ADC7" />
          <stop offset="1" stopColor="#13ADC7" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint10_linear"
          x1="117.001"
          y1="230.619"
          x2="117.36"
          y2="258.193"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#945DD6" />
          <stop offset="1" stopColor="#945DD6" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint11_linear"
          x1="476.529"
          y1="363.31"
          x2="451.461"
          y2="338.272"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#13ADC7" />
          <stop offset="1" stopColor="#13ADC7" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg> */}
  </div>
  )
}

export default BackgroundAnimation;