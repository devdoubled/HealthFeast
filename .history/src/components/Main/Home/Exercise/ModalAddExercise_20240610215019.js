import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ModalAddExercise = () => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={handleCloseModal}
    >
      <Pressable style={styles.modalContainer} onPress={handleCloseModal}>
        <View
          style={styles.modalContent}
          onStartShouldSetResponder={() => true}
        >
          <Pressable style={styles.close_icon} onPress={handleCloseModal}>
            <AntDesign name="closecircleo" size={26} color="white" />
          </Pressable>
          <View style={styles.modal_title}>
            <Image source={ModalAddImg} style={styles.modal_img} />
            <Text style={styles.modal_text}>Thêm vào bữa ăn bạn muốn</Text>
          </View>
          <View style={styles.choose_meal}>
            <Pressable
              style={({ pressed }) => [
                styles.choose_btn,
                pressed && styles.pressed,
              ]}
            >
              <Text style={styles.choose_text}>Bữa ăn sáng</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                styles.choose_btn,
                pressed && styles.pressed,
              ]}
            >
              <Text style={styles.choose_text}>Bữa ăn trưa</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                styles.choose_btn,
                pressed && styles.pressed,
              ]}
            >
              <Text style={styles.choose_text}>Bữa ăn tối</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                styles.choose_btn,
                pressed && styles.pressed,
              ]}
            >
              <Text style={styles.choose_text}>Bữa ăn vặt</Text>
            </Pressable>
          </View>
        </View>
      </Pressable>
    </Modal>
  )
}

export default ModalAddExercise

const styles = StyleSheet.create({})