import {Global, css} from "@emotion/react"
const GlobalStyle = () => {
    return (
        <Global
          styles= {css`
            @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@200;300;500;600;700;800&display=swap');
;

            body{
                font-family: 'Raleway', sans-serif;
                background-color: #1f1f1f;
                color: white;
                padding: 0;
                margin: 0;
            }
          `}
        />
    )
        
        
}
export default GlobalStyle