import * as SC from './FilterButtons.styled'

export const FilterButtons = ({ setFilter }) => {
    return <SC.List>
        <li><SC.ListBtn  type="button" onClick={()=>setFilter('female')}>Girls</SC.ListBtn></li>
        <li><SC.ListBtn type="button" onClick={()=>setFilter('male')}>Boys</SC.ListBtn></li>
        <li><SC.ListBtn type="button" onClick={()=>setFilter('all')}>All</SC.ListBtn></li>
    </SC.List>
}