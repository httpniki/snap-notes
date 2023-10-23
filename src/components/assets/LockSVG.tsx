interface Props {
   style?: React.CSSProperties
}

export default function LockSVG({style}: Props) {
   return(
      <svg  
         width="24" 
         height="24" 
         viewBox="0 0 24 24" 
         strokeWidth="1.5" 
         stroke="#ffffff" 
         fill="none" 
         stroke-linecap="round" 
         stroke-linejoin="round"
         style={style}
      >
         <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
         <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z" />
         <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
         <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
      </svg>
   )
}