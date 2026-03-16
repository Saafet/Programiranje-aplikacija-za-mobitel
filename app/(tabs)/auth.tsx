import { useState } from "react";
import {
    View,
    Text,
    TextInput,
    Pressable,
    StyleSheet,
} from "react-native";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "@/firebaseConfig";

export default function AuthScreen() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [loggedIn, setLoggedIn] = useState<boolean>(false);

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setLoggedIn(true);
            setErrorMessage("");
        } catch (error: any) {
            setErrorMessage(error.message);
        }
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            setLoggedIn(false);
            setErrorMessage("");
        } catch (error: any) {
            setErrorMessage(error.message);
        }
    };

    if (loggedIn) {
        return (
            <View style={styles.screen}>
                <View style={styles.card}>
                    <Text style={styles.title}>Dobrodošli u aplikaciju!</Text>
                    <Pressable style={styles.button} onPress={handleLogout}>
                        <Text style={styles.buttonText}>Odjavi se</Text>
                    </Pressable>
                </View>
            </View>
        );
    }

    return (
        <View style={styles.screen}>
            <View style={styles.card}>
                <Text style={styles.title}>Login</Text>
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    style={styles.input}
                    autoCapitalize="none"
                    keyboardType="email-address"
                    placeholderTextColor="#6B7280"
                />
                <TextInput
                    placeholder="Lozinka"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    style={styles.input}
                    placeholderTextColor="#6B7280"
                />
                {errorMessage ? (
                    <Text style={styles.error}>{errorMessage}</Text>
                ) : null}
                <Pressable style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Prijava</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    card: {
        width: "100%",
        maxWidth: 380,
        backgroundColor: "#FFFFFF",
        borderRadius: 18,
        padding: 24,
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 4 },
        elevation: 4,
    },
    title: {
        fontSize: 28,
        fontWeight: "700",
        color: "#111827",
        marginTop: 10,
        marginBottom: 18,
    },
    input: {
        width: "100%",
        height: 48,
        borderWidth: 1,
        borderColor: "#D1D5DB",
        backgroundColor: "#FFFFFF",
        borderRadius: 12,
        marginBottom: 12,
        paddingHorizontal: 14,
        color: "#111827",
    },
    error: {
        width: "100%",
        color: "#DC2626",
        marginBottom: 12,
        textAlign: "left",
    },
    button: {
        width: "100%",
        backgroundColor: "#2563EB",
        paddingVertical: 14,
        borderRadius: 12,
        alignItems: "center",
        marginTop: 4,
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "600",
    },
});
