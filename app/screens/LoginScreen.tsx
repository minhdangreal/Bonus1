import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { IconSymbol, IconSymbolName } from '@/components/ui/IconSymbol';


const SocialButton = ({ name }: { name: IconSymbolName }) => {
  return (
    <TouchableOpacity
      style={[
        styles.socialButton,
        {
          marginHorizontal: 25,
          marginTop: 5,
        },
      ]}
    >
      <IconSymbol
        name={name}
        size={name === 'google' ? 60 : 50}
        color="#000000"
      />
    </TouchableOpacity>
  );
};

export default function LoginScreen() {
  const [phone, setPhone] = useState('');
  const [isChecked, setIsChecked] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <TouchableOpacity style={styles.backButton}>
          <IconSymbol name="chevron.left" size={30} color="#000000" />
        </TouchableOpacity>

        <ThemedText style={styles.title}>Đăng nhập</ThemedText>
        <ThemedText style={styles.subtitle}>
          Vui lòng nhập số điện thoại để xác nhận OTP
        </ThemedText>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>
            Số điện thoại <Text style={styles.requiredStar}>*</Text>
          </Text>
          <View style={styles.inputWrapper}>
            <IconSymbol name="phone" size={20} color="#999999" />
            <TextInput
              style={[styles.input, {fontWeight: 'bold', fontSize: 16, marginLeft: -2}]}
              placeholder="0904690895"
              placeholderTextColor="#333333"
              keyboardType="phone-pad"
              value={phone}
              onChangeText={setPhone}
            />
          </View>
        </View>

        <TouchableOpacity
          style={styles.checkboxContainer}
          onPress={() => setIsChecked(!isChecked)}
        >
          <View style={styles.checkboxWrapper}>
            <View style={[styles.checkbox, isChecked && styles.checkboxChecked]}>
              {isChecked && (
                <Text style={styles.checkmark}>✓</Text>
              )}
            </View>
          </View>
          <Text style={styles.checkboxText}>
            Tôi đồng ý với Điều khoản sử dụng & Chính sách bảo vệ dữ liệu cá nhân của MobiFone{' '}
            <Text style={styles.linkText}>(Chi tiết)</Text>
          </Text>
        </TouchableOpacity>

        <View style={styles.loginContainer}>
          <TouchableOpacity style={[styles.loginButton, { flex: 0.95 , marginRight: 10, marginLeft: -15, height: 50}]}>
            <ThemedText style={[styles.loginButtonText, {lineHeight: 20}]}>Đăng nhập</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.faceIdButton}>
            <IconSymbol name="faceid" size={40} color="#0066CC" />
          </TouchableOpacity>
        </View>

        <View style={styles.socialContainer}>
          <View style={styles.dividerContainer}>
            <View style={styles.divider} />
            <ThemedText style={styles.socialText}>Hoặc đăng nhập bằng</ThemedText>
            <View style={styles.divider} />
          </View>
          <View style={styles.socialButtons}>
            <SocialButton name="4g" />
            <SocialButton name="apple" />
            <SocialButton name="facebook" />
            <SocialButton name="google" />
          </View>
        </View>
      </View>
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>
          Bằng việc đăng nhập, Quý khách đã đồng ý với mọi{' '}
          <Text style={styles.footerLink}>Điều khoản sử dụng & Chính sách bảo mật thông tin</Text>
          {' '}của MobiFone
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  // headerBackground: {
  //   backgroundColor: '#F5F5F5',
  //   height: 50,
  //   position: 'absolute',
  //   top: 0,
  //   left: 0,
  //   right: 0,
  // },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#a3d6f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold', 
    color: '#0066CC',
    marginTop: 20,
    lineHeight: 34, 
  },
  subtitle: {
    fontSize: 13,
    color: '#133d72',
    marginTop: 5,
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    padding: 12,
    fontSize: 16,
    color: '#000000',
    marginLeft: 8,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 5,
    paddingHorizontal: 0,
  },
  checkboxWrapper: {
    marginRight: 10,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#0078D4',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  checkboxChecked: {
    backgroundColor: '#0078D4',
  },
  checkmark: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  checkboxText: {
    flex: 1,
    fontSize: 14,
    color: '#133d72',
    lineHeight: 20,
  },
  linkText: {
    color: '#0078D4',
  },
  loginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  loginButton: {
    flex: 0.85,
    backgroundColor: '#0066CC',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  faceIdButton: {
    width: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#0066CC',
  },
  socialContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    marginBottom: 15,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#000000',
    marginHorizontal: 10,
  },
  socialText: {
    color: '#000000',
    fontSize: 14,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  socialButton: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkLine1: {
    position: 'absolute',
    width: 3,
    height: 8,
    backgroundColor: '#FFFFFF',
    transform: [{ rotate: '45deg' }],
    left: 5,
    top: 8,
  },
  checkLine2: {
    position: 'absolute',
    width: 3,
    height: 14,
    backgroundColor: '#FFFFFF',
    transform: [{ rotate: '-45deg' }],
    right: 6,
    top: 4,
  },
  footerContainer: {
    paddingHorizontal: 16,
    paddingBottom: 60,
    paddingTop: 8,
  },
  footerText: {
    fontSize: 12,
    color: '#666666',
    textAlign: 'left',
  },
  footerLink: {
    color: '#0078D4',
    textDecorationLine: 'underline',
    fontStyle: 'italic',
  },
  inputLabel: {
    fontSize: 18,
    color: '#1251a2',
    marginBottom: 8,
    fontWeight: 'bold',
  },
  requiredStar: {
    color: 'red',
  },
});
