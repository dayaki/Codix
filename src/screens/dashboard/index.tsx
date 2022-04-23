// import React from 'react';
// import { View, Text, TouchableOpacity, Image } from 'react-native';
// import { Header } from '../../common';
// import { styles } from './styles';

// const Dashboard = ({ navigation }) => {
//   return (
//     <>
//       <Header title="Dashboard" />
//       <View style={styles.container}>
//         <Text style={styles.title}>Actions</Text>
//         <View style={styles.actions}>
//           <TouchableOpacity
//             activeOpacity={0.6}
//             style={styles.btn}
//             onPress={() => navigation.navigate('feedback_create')}>
//             <Image
//               source={require('../../../assets/images/sendFeedback.png')}
//               resizeMode="cover"
//               style={styles.btnImage}
//             />
//             <Text style={styles.btnText}>Create Feedback</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             activeOpacity={0.6}
//             style={styles.btn}
//             onPress={() => navigation.navigate('feedback_questions')}>
//             <Image
//               source={require('../../../assets/images/faulty.png')}
//               resizeMode="cover"
//               style={styles.btnImage}
//             />
//             <Text style={styles.btnText}>Report Faulty Device</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             activeOpacity={0.6}
//             style={styles.btn}
//             onPress={() => navigation.navigate('create_feedback')}>
//             <Image
//               source={require('../../../assets/images/regnew.png')}
//               resizeMode="cover"
//               style={styles.btnImage}
//             />
//             <Text style={styles.btnText}>Register A Device</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </>
//   );
// };

// export default Dashboard;
