const React = require('react');
const {
    Header,
    Table,
} = require('../components');
const { Document, Text, Image, View, Page, StyleSheet } = require('@react-pdf/renderer');

const { data } = require('../faker/data'); // here we would fetch the data from our API

const Template = ({ config }) => {
    const renderElement = (item, index) => {
        if (item.type === 'header') {
            return (
                <Header fixed={item.fixed} components={item.components} key={`page-element-${index}`} />
            );
        }

        if (item.type === 'image') {
            return (
                <Image src={item.data} key={`page-element-${index}`} />
            );
        }

        if (item.type === 'text') {
            return (
                <Text style={{ fontSize: 12, marginVertical: 5 }} key={`page-element-${index}`}>{item.data}</Text>
            );
        }

        if (item.type === 'title') {
            return (
                <View style={{ marginVertical: 10 }} key={`page-element-${index}`}>
                    <Text style={styles.title}>{item.data}</Text>
                    {item.caption && (
                        <Text style={styles.caption}>{item.caption}</Text>
                    )}
                </View>
            );
        }

        if (item.type === 'table') {
            return (
                <Table
                    data={data}
                    columns={item.columns}
                    key={`page-element-${index}`}
                />
            );
        }

        if (item.type === 'footer') {
            return (
                <View fixed={item.fixed} style={styles.footer} key={`page-element-${index}`}>
                    <View style={styles.footerTop}>
                        {item.components.map((cp, index) => {
                            if (cp.type === 'image') {
                                return <Image key={`footer-component-${index}`} src={cp.data} style={styles.footerImage} />
                            }

                            return renderElement(cp);
                        })}
                    </View>
                    {item.pagination && (
                        <Text render={({ pageNumber, totalPages }) => (
                            `${pageNumber} / ${totalPages}`
                        )} />
                    )}
                </View>
            );
        }

        return null;
    };

    return (
        <Document>
            <Page style={styles.page}>
                {config.map((item, index) => renderElement(item, index))}
            </Page>
        </Document>
    );
};

const styles = StyleSheet.create({
    page: {
        padding: 20,
        paddingBottom: 100
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    caption: {
        fontSize: 12,
        color: 'gray'
    },
    footer: {
        position: 'absolute',
        fontSize: 10,
        bottom: 0,
        left: 0,
        right: 0,
        color: 'grey',
        padding: 20,
        textAlign: 'center',
    },
    footerTop: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    footerImage: {
        height: 27,
        width: 100
    }
});

module.exports = { Template };
