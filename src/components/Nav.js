import React from 'react';
import PropTypes from 'prop-types';
import Drawer from 'material-ui/Drawer';
// import List, { ListItem, ListItemText } from 'material-ui/List';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


export default function Nav({ onClick }) {

    return (
        <List style={{ width: 240 }}>
            <ListItem
                button
                key={'点数計算'}
                onClick={() => onClick("/")}
            >
                <ListItemText primary={'点数計算'} />
            </ListItem>
            <ListItem
                button
                key={'役一覧'}
                onClick={() => onClick("/yaku")}
            >
                <ListItemText primary={'役一覧'} />
            </ListItem>
            <ListItem
                button
                key={'符計算一覧'}
                onClick={() => onClick("/fu")}
            >
                <ListItemText primary={'符計算一覧'} />
            </ListItem>
            <ListItem
                button
                key={'計算表'}
                onClick={() => onClick("/scoretable")}
            >
                <ListItemText primary={'計算表'} />
            </ListItem>
        </List>
    );

}

Nav.propTypes = {
    onClick: PropTypes.func.isRequired
};

// import React from 'react';
// import PropTypes from 'prop-types';
// import Drawer from 'material-ui/Drawer';
// import List, { ListItem, ListItemText } from 'material-ui/List';


// export default function Nav({ onClick }) {

//     return (
//         <div>
//             <Drawer type='permanent'>
//                 <List style={{ width: 240 }}>
//                     <ListItem
//                         button
//                         key={'点数計算'}
//                         onClick={() => onClick("/score")}
//                     >
//                         <ListItemText primary={'点数計算'} />
//                     </ListItem>
//                     <ListItem
//                         button
//                         key={'役一覧'}
//                         onClick={() => onClick("/yaku")}
//                     >
//                         <ListItemText primary={'役一覧'} />
//                     </ListItem>
//                     <ListItem
//                         button
//                         key={'符計算一覧'}
//                         onClick={() => onClick("/hu")}
//                     >
//                         <ListItemText primary={'符計算一覧'} />
//                     </ListItem>
//                     <ListItem
//                         button
//                         key={'計算表'}
//                         onClick={() => onClick("/scoretable")}
//                     >
//                         <ListItemText primary={'計算表'} />
//                     </ListItem>
//                 </List>
//             </Drawer>
//         </div>
//     );

// }

// Nav.propTypes = {
//     onClick: PropTypes.func.isRequired
// };


// import React from 'react';
// import PropTypes from 'prop-types';
// import Drawer from 'material-ui/Drawer';
// import List, { ListItem, ListItemText } from 'material-ui/List';


// export default function Nav({ onClick }) {

//     return (
//         <div>
//             <Drawer type='permanent'>
//                 <List style={{ width: 240 }}>
//                     <ListItem
//                         button
//                         key={'点数計算'}
//                         onClick={() => onClick("/score")}
//                     >
//                         <ListItemText primary={'点数計算'} />
//                     </ListItem>
//                     <ListItem
//                         button
//                         key={'役一覧'}
//                         onClick={() => onClick("/yaku")}
//                     >
//                         <ListItemText primary={'役一覧'} />
//                     </ListItem>
//                     <ListItem
//                         button
//                         key={'符計算一覧'}
//                         onClick={() => onClick("/hu")}
//                     >
//                         <ListItemText primary={'符計算一覧'} />
//                     </ListItem>
//                     <ListItem
//                         button
//                         key={'計算表'}
//                         onClick={() => onClick("/scoretable")}
//                     >
//                         <ListItemText primary={'計算表'} />
//                     </ListItem>
//                 </List>
//             </Drawer>
//         </div>
//     );

// }

// Nav.propTypes = {
//     onClick: PropTypes.func.isRequired
// };