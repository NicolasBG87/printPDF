const React = require('react');
const { View, StyleSheet, Image, Text } = require('@react-pdf/renderer');

const Header = ({ fixed, components }) => {
    return (
        <View fixed={fixed} style={styles.header}>
            {components.map(cp => {
                if (cp.type === 'image') {
                    return <Image src={cp.data} style={styles.headerImage} />
                }

                return <Text style={{ fontSize: 10 }}>{cp.data}</Text>
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    headerImage: {
        height: 50,
        width: 100,
    }
});

module.exports = { Header };
