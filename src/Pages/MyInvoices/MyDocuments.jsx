import { Document, Image, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import React from 'react';

const MyDocuments = ({ item }) => {
    const itemInfo = item.itemDetails;
   

    const styles = StyleSheet.create({
        page: {
            padding: 30,
            fontSize: 12,
            fontFamily: "Helvetica",
        },
        header: {
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 20,
        },
        issue: {
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 20,
            fontSize: 11,
        },
        companyDetails: {
            marginBottom: 10,
            gap: 6,
            fontSize: 11
        },
        myCompanyDetails: {
            marginBottom: 40,
            gap: 6,
            fontSize: 11
        },
        sectionTitle: {
            fontSize: 10,
            marginBottom: 5,
            fontWeight: "bold",
        },
        tableHeader: {
            flexDirection: "row",
            backgroundColor: "#0E7490",
            color: "white",
            padding: 5,
        },
        tableRow: {
            flexDirection: "row",
            padding: 5,
            marginBottom: 5,
            borderBottom: "1px solid #ccc",
        },
        col: {
            flex: 1,
            fontSize: 10

        },
        headOfCol: {
            flex: 1,
            fontSize: 11

        },
        notes: {
            marginTop: 10,
        },
        noteSection: {
            marginTop: 20,
        },
        noteTerms: {
            fontSize: 10
        },
        responsiveImage: {
            width: 100,
            height: 100,
            marginBottom: 0,
            objectFit: 'cover',
            borderRadius: 2,
        },
        details: {
            gap: 6
        },

        totalsContainer: {
            marginTop: 30,
            width: '100%',
            alignItems: 'flex-end',
        },
        row: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: 200,
            marginBottom: 4,
        },
        label: {
            fontSize: 11,
            color: '#555',
        },
        value: {
            fontSize: 11,
            fontWeight: 'bold',
        },
    });







    return (
        <Document>
            <Page style={styles.page}>
                {/* Header */}
                <View style={styles.header}>
                    <Image style={styles.responsiveImage} src={item.invoiceLogo}></Image>
                    <Text style={{ fontSize: 27, fontWeight: "bold" }}>INVOICE</Text>
                </View>

                {/* From */}
                <View style={styles.myCompanyDetails}>
                    <Text style={styles.sectionTitle}>From:</Text>
                    <Text>{item.myCompanyName}</Text>
                    <Text>{item.myName}</Text>
                    <Text>{item.myEmail}</Text>
                    <Text>{item.myCompanyAddress}</Text>
                    <Text>{item.myContactNumber}</Text>
                    <Text>{item.myCity}</Text>
                    <Text>{item.myCountry}</Text>
                </View>

                {/* To */}
                <View style={styles.issue}>

                    <View style={styles.companyDetails}>
                        <Text style={styles.sectionTitle}>Bill To:</Text>
                        <Text>{item.clientsCompanyName}</Text>
                        <Text>{item.clientsName}</Text>
                        <Text>{item.clientsEmail}</Text>
                        <Text>{item.clientsCompanyAddress}</Text>
                        <Text>{item.clientsContactNumber}</Text>
                        <Text>{item.clientsCity}</Text>
                        <Text>{item.clientsCountry}</Text>
                    </View>
                    <View style={styles.details}>
                        <Text>Invoice#:{item.invoiceNumber} </Text>
                        <Text>Issue Date: {item.issueDate}</Text>
                        <Text>Due Date: {item.dueDate}</Text>
                    </View>
                </View>


                {/* Items Table */}
                <View style={styles.tableHeader}>
                    <Text style={styles.headOfCol}>Item</Text>
                    <Text style={styles.headOfCol}>Qty</Text>
                    <Text style={styles.headOfCol}>Rate</Text>
                    <Text style={styles.headOfCol}>Tax (%)</Text>
                    <Text style={styles.headOfCol}>Amount</Text>
                </View>
                {Array.isArray(itemInfo) && itemInfo?.map((item, idx) => {
                    const amount = item.quantity * item.rate;
                    const taxAmount = (amount * item.tax) / 100;
                    const total = amount + taxAmount;
                    return (
                        <View style={styles.tableRow} key={idx}>
                            <Text style={styles.col}>{item.name}</Text>
                            <Text style={styles.col}>{item.quantity}</Text>
                            <Text style={styles.col}>${item.rate}</Text>
                            <Text style={styles.col}>{item.tax}</Text>
                            <Text style={styles.col}>${total.toFixed(2)}</Text>
                        </View>
                    );
                })}

                {/* Totals */}
                <View style={styles.totalsContainer}>
                    <View style={styles.row}>
                        <Text style={styles.label}>Subtotal:</Text>
                        <Text style={styles.value}>${item.subtotal}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Tax (0%):</Text>
                        <Text style={styles.value}>${item.totalTax}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Total:</Text>
                        <Text style={styles.value}>${item.grandTotal}</Text>
                    </View>
                </View>

                {/* <View style={styles.total}>
                    <Text>Sub Total:{item.subtotal} </Text>
                    <Text>Tax: {item.totalTax}</Text>
                    <Text style={{ fontSize: 14, marginTop: 4 }}>Total: ${item.grandTotal}</Text>
                </View> */}

                {/* Notes */}
                <View style={styles.noteSection}>
                    <View style={styles.notes}>
                        <Text style={styles.sectionTitle}>Notes:</Text>
                        <Text style={styles.noteTerms}>{item.notes}</Text>
                    </View>

                    {/* Terms */}
                    <View style={styles.notes}>
                        <Text style={styles.sectionTitle}>Terms & Conditions:</Text>
                        <Text style={styles.noteTerms}>
                            {item.termsCondition}
                        </Text>
                    </View>
                </View>
            </Page>
        </Document>
    );
};

export default MyDocuments;