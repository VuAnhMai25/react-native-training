//TODO: Style props

// import React, {Component} from 'react';
// import {Text, View} from 'react-native';
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View
//         style={{
//           flex: 1,
//           justifyContent: 'center',
//           backgroundColor: '#fff',
//           alignItems: 'center',
//         }}>
//         <View
//           style={{
//             width: 200,
//             height: 150,
//             backgroundColor: 'red',
//             padding: 10,
//           }}>
//           <Text style={{fontSize: 20, color: '#666'}}>
//             Styled with style props
//           </Text>
//         </View>
//       </View>
//     );
//   }
// }

//TODO: StyleSheet

// import React, {Component} from 'react';
// import {Text, View, StyleSheet} from 'react-native';
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.item1}>
//           <Text style={styles.title}>Item number 1</Text>
//         </View>

//         <View style={styles.item2}>
//           <Text style={styles.title}>Item number 1</Text>
//         </View>

//         <View style={styles.item3}>
//           <Text style={styles.title}>Item number 1</Text>
//         </View>

//         <View style={styles.item4}>
//           <Text style={styles.title}>Item number 1</Text>
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: '#fff',
//     alignItems: 'stretch',
//   },
//   title: {
//     fontSize: 30,
//     color: '#fff',
//   },
//   item1: {
//     backgroundColor: 'orange',
//     flex: 1,
//   },
//   item2: {
//     backgroundColor: 'purple',
//     flex: 1,
//   },
//   item3: {
//     backgroundColor: 'yellow',
//     flex: 1,
//   },
//   item4: {
//     backgroundColor: 'red',
//     flex: 1,
//   },
//   card: {
//     width: 100,
//     height: 120,
//     shadowColor: '#000000',
//     shadowOffset: {
//       width: 0,
//       height: 3,
//     },
//     shadowRadius: 5,
//     shadowOpacity: 1.0,
//   },
// });

//TODO: styled-component in React Native

// import React, {Component} from 'react';
// import {StyleSheet, Text, View} from 'react-native';
// import styled from 'styled-components';

// const Container = styled.View`
//   flex: 1;
//   padding: 50px 0;
//   justify-content: center;
//   background-color: #f4f4f4;
//   align-items: center;
// `;
// const Title = styled.Text`
//   font-size: 20px;
//   text-align: center;
//   color: red;
// `;
// const Item = styled.View`
//   flex: 1;
//   border: 1px solid #ccc;
//   margin: 2px 0;
//   border-radius: 10px;
//   box-shadow: 0 0 10px #ccc;
//   height: 200px;
//   background-color: ${props => (props.transparent ? 'red' : 'blue')};
//   width: 80%;
//   padding: 10px;
// `;
// const Shape = styled.View`
//   clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
// `;

// export default class App extends Component {
//   render() {
//     return (
//       <Container>
//         <Item transparent>
//           {/*pass the props to the components*/}
//           <Title>Item number 1</Title>
//         </Item>
//         <Item primary>
//           <Title>Item number 1</Title>
//         </Item>
//         <Item transparent>
//           <Title>Item number 1</Title>
//         </Item>
//         <Item primary>
//           <Title>Item number 1</Title>
//         </Item>
//       </Container>
//     );
//   }
// }

// import React, {Component} from 'react';
// import {StyleSheet, Text, View} from 'react-native';
// import styled from 'styled-components';
// import Svg, {
//   Circle,
//   Ellipse,
//   G,
//   TSpan,
//   TextPath,
//   Path,
//   Polygon,
//   Polyline,
//   Line,
//   Rect,
//   Use,
//   Image,
//   Symbol,
//   Defs,
//   LinearGradient,
//   RadialGradient,
//   Stop,
//   ClipPath,
//   Pattern,
//   Mask,
// } from 'react-native-svg';

// const Container = styled.View`
//   flex: 1;
//   padding: 50px 0;
//   justify-content: center;
//   background-color: #f4f4f4;
//   align-items: center;
// `;
// const Title = styled.Text`
//   font-size: 20px;
//   text-align: center;
//   color: red;
// `;
// const Item = styled.View`
//   flex: 1;
//   border: 1px solid #ccc;
//   margin: 2px 0;
//   border-radius: 10px;
//   box-shadow: 0 0 10px #ccc;
//   height: 200px;
//   background-color: ${props => (props.transparent ? 'red' : 'blue')};
//   width: 80%;
//   padding: 10px;
// `;

// export default class App extends Component {
//   render() {
//     return (
//       <Container>
//         <Svg height="150" width="300">
//           <Defs>
//             <LinearGradient id="grad" x1="0" y1="0" x2="170" y2="0">
//               <Stop offset="0" stopColor="rgb(255,255,0)" stopOpacity="0" />
//               <Stop offset="1" stopColor="red" stopOpacity="1" />
//             </LinearGradient>
//           </Defs>
//           <Ellipse cx="150" cy="75" rx="85" ry="55" fill="url(#grad)" />
//         </Svg>

//         <Svg height="100" width="100">
//           <Defs>
//             <RadialGradient
//               id="grad"
//               cx="50%"
//               cy="50%"
//               rx="50%"
//               ry="50%"
//               fx="50%"
//               fy="50%"
//               gradientUnits="userSpaceOnUse">
//               <Stop offset="0%" stopColor="#ff0" stopOpacity="1" />
//               <Stop offset="100%" stopColor="#00f" stopOpacity="1" />
//             </RadialGradient>
//             <ClipPath id="clip">
//               <G scale="0.9" x="10">
//                 <Circle cx="40" cy="30" r="20" />
//                 <Ellipse cx="60" cy="70" rx="20" ry="10" />
//                 <Rect x="65" y="15" width="50" height="50" />
//                 <Polygon points="20,60 20,80 50,70" />
//                 <Text
//                   x="50"
//                   y="30"
//                   fontSize="32"
//                   fonWeight="bold"
//                   textAnchor="middle"
//                   scale="1.2">
//                   Q
//                 </Text>
//               </G>
//             </ClipPath>
//           </Defs>
//           <Rect
//             x="0"
//             y="0"
//             width="100"
//             height="100"
//             fill="url(#grad)"
//             clipPath="url(#clip)"
//           />
//         </Svg>
//         <Svg height="100" width="300">
//           <Defs>
//             <G id="shape">
//               <G>
//                 <Circle cx="50" cy="50" r="50" />
//                 <Rect x="50" y="50" width="60" height="50" />
//                 <Circle cx="50" cy="50" r="5" fill="#c00" />
//               </G>
//             </G>
//           </Defs>
//           <Use href="#shape" x="20" y="0" />
//           <Use href="#shape" x="170" y="0" />
//         </Svg>
//       </Container>
//     );
//   }
// }

// TODO: FlexDirectionBasics
// import React, {useState} from 'react';
// import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import type {PropsWithChildren} from 'react';

// const FlexDirectionBasics = () => {
//   const [flexDirection, setflexDirection] = useState('column');

//   return (
//     <PreviewLayout
//       label="flexDirection"
//       values={['column', 'row', 'row-reverse', 'column-reverse']}
//       selectedValue={flexDirection}
//       setSelectedValue={setflexDirection}>
//       <View style={[styles.box, {backgroundColor: 'powderblue'}]} />
//       <View style={[styles.box, {backgroundColor: 'skyblue'}]} />
//       <View style={[styles.box, {backgroundColor: 'steelblue'}]} />
//     </PreviewLayout>
//   );
// };

// type PreviewLayoutProps = PropsWithChildren<{
//   label: string;
//   values: string[];
//   selectedValue: string;
//   setSelectedValue: (value: string) => void;
// }>;

// const PreviewLayout = ({
//   label,
//   children,
//   values,
//   selectedValue,
//   setSelectedValue,
// }: PreviewLayoutProps) => (
//   <View style={{padding: 10, flex: 1}}>
//     <Text style={styles.label}>{label}</Text>
//     <View style={styles.row}>
//       {values.map(value => (
//         <TouchableOpacity
//           key={value}
//           onPress={() => setSelectedValue(value)}
//           style={[styles.button, selectedValue === value && styles.selected]}>
//           <Text
//             style={[
//               styles.buttonLabel,
//               selectedValue === value && styles.selectedLabel,
//             ]}>
//             {value}
//           </Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//     <View style={[styles.container, {[label]: selectedValue}]}>{children}</View>
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 8,
//     backgroundColor: 'aliceblue',
//   },
//   box: {
//     width: 50,
//     height: 50,
//   },
//   row: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//   },
//   button: {
//     paddingHorizontal: 8,
//     paddingVertical: 6,
//     borderRadius: 4,
//     backgroundColor: 'oldlace',
//     alignSelf: 'flex-start',
//     marginHorizontal: '1%',
//     marginBottom: 6,
//     minWidth: '48%',
//     textAlign: 'center',
//   },
//   selected: {
//     backgroundColor: 'coral',
//     borderWidth: 0,
//   },
//   buttonLabel: {
//     fontSize: 12,
//     fontWeight: '500',
//     color: 'coral',
//   },
//   selectedLabel: {
//     color: 'white',
//   },
//   label: {
//     textAlign: 'center',
//     marginBottom: 10,
//     fontSize: 24,
//   },
// });

// export default FlexDirectionBasics;
// TODO: AlignItemsLayout
// import React, {useState} from 'react';
// import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
// import type {PropsWithChildren} from 'react';

// const AlignItemsLayout = () => {
//   const [alignItems, setAlignItems] = useState('stretch');

//   return (
//     <PreviewLayout
//       label="alignItems"
//       selectedValue={alignItems}
//       values={['stretch', 'flex-start', 'flex-end', 'center', 'baseline']}
//       setSelectedValue={setAlignItems}>
//       <View
//         style={[
//           styles.box,
//           {backgroundColor: 'powderblue', width: 'auto', minWidth: 50},
//         ]}
//       />
//       <View
//         style={[
//           styles.box,
//           {backgroundColor: 'skyblue', width: 'auto', minWidth: 50},
//         ]}
//       />
//       <View
//         style={[
//           styles.box,
//           {
//             backgroundColor: 'steelblue',
//             width: 'auto',
//             minWidth: 50,
//           },
//         ]}
//       />
//     </PreviewLayout>
//   );
// };

// type PreviewLayoutProps = PropsWithChildren<{
//   label: string;
//   values: string[];
//   selectedValue: string;
//   setSelectedValue: (value: string) => void;
// }>;

// const PreviewLayout = ({
//   label,
//   children,
//   values,
//   selectedValue,
//   setSelectedValue,
// }: PreviewLayoutProps) => (
//   <View style={{padding: 10, flex: 1}}>
//     <Text style={styles.label}>{label}</Text>
//     <View style={styles.row}>
//       {values.map(value => (
//         <TouchableOpacity
//           key={value}
//           onPress={() => setSelectedValue(value)}
//           style={[styles.button, selectedValue === value && styles.selected]}>
//           <Text
//             style={[
//               styles.buttonLabel,
//               selectedValue === value && styles.selectedLabel,
//             ]}>
//             {value}
//           </Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//     <View style={[styles.container, {[label]: selectedValue}]}>{children}</View>
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 8,
//     backgroundColor: 'aliceblue',
//     minHeight: 200,
//   },
//   box: {
//     width: 50,
//     height: 50,
//   },
//   row: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//   },
//   button: {
//     paddingHorizontal: 8,
//     paddingVertical: 6,
//     borderRadius: 4,
//     backgroundColor: 'oldlace',
//     alignSelf: 'flex-start',
//     marginHorizontal: '1%',
//     marginBottom: 6,
//     minWidth: '48%',
//     textAlign: 'center',
//   },
//   selected: {
//     backgroundColor: 'coral',
//     borderWidth: 0,
//   },
//   buttonLabel: {
//     fontSize: 12,
//     fontWeight: '500',
//     color: 'coral',
//   },
//   selectedLabel: {
//     color: 'white',
//   },
//   label: {
//     textAlign: 'center',
//     marginBottom: 10,
//     fontSize: 24,
//   },
// });

// export default AlignItemsLayout;

//TODO: JustifyContentBasics
import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import type {PropsWithChildren} from 'react';

const JustifyContentBasics = () => {
  const [justifyContent, setJustifyContent] = useState('flex-start');
  return (
    <PreviewLayout
      label="justifyContent"
      selectedValue={justifyContent}
      values={[
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
        'space-evenly',
      ]}
      setSelectedValue={setJustifyContent}>
      <View style={[styles.box, {backgroundColor: 'powderblue'}]} />
      <View style={[styles.box, {backgroundColor: 'skyblue'}]} />
      <View style={[styles.box, {backgroundColor: 'steelblue'}]} />
    </PreviewLayout>
  );
};

type PreviewLayoutProps = PropsWithChildren<{
  label: string;
  values: string[];
  selectedValue: string;
  setSelectedValue: (value: string) => void;
}>;

const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}: PreviewLayoutProps) => (
  <View style={{padding: 10, flex: 1}}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {values.map(value => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[styles.button, selectedValue === value && styles.selected]}>
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value && styles.selectedLabel,
            ]}>
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={[styles.container, {[label]: selectedValue}]}>{children}</View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: 'aliceblue',
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'oldlace',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center',
  },
  selected: {
    backgroundColor: 'coral',
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: 'coral',
  },
  selectedLabel: {
    color: 'white',
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
});

export default JustifyContentBasics;
