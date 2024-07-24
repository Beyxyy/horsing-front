import { Text } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
    return <div><Link href={"/details"}>Test</Link><Text>Top-level page</Text></div>;
}