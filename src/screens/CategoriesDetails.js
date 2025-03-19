import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const CardioScreen = () => {
    return (
        <ScrollView style={styles.container}>
            {/* Header Section */}
            <View style={styles.headerContainer}>
                <Image
                    source={require("../../assets/homeimages/yoga.jpeg")}
                    style={styles.topImage}
                    resizeMode="cover"
                />

                {/* Full Overlay */}
                <View style={styles.fullOverlay}>
                    {/* Title at Top */}
                    <Text style={[styles.header, { alignSelf: 'center' }]}>CARDIO</Text>

                    {/* Metrics Cards */}
                    <View style={styles.metricsContainer}>
                        <View style={styles.imageDescription}>
                            <View style={styles.metricItem}>
                                <Text style={styles.metricValue}>🔥 500kcal</Text>
                                <Text style={styles.metricLabel}>Burn</Text>
                            </View>
                        </View>
                        <View style={styles.imageDescription}>
                            <View style={styles.metricItem}>
                                <Text style={styles.metricValue}>⚡ 30%</Text>
                                <Text style={styles.metricLabel}>Fat Loss</Text>
                            </View></View>
                        <View style={styles.imageDescription}>
                            <View style={styles.metricItem}>
                                <Text style={styles.metricValue}>💪 85%</Text>
                                <Text style={styles.metricLabel}>Stamina</Text>
                            </View>
                        </View>
                    </View>

                    {/* Description on Image */}
                    <View style={styles.imageDescription}>
                        <Text style={styles.imageDescriptionText}>
                            Cardio workouts raise your heart rate, improve cardiovascular health,
                            and boost overall stamina. Regular sessions enhance lung capacity and
                            promote fat burning.
                        </Text>
                        <TouchableOpacity style={styles.moreButton}>
                            <Text style={styles.moreButtonText}>Learn More →</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* Live Classes Header */}
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Live Classes</Text>
                <TouchableOpacity>
                    <Text style={styles.seeAll}>See All</Text>
                </TouchableOpacity>
            </View>

            {/* Exercise Cards */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                {[1, 2, 3, 4].map((item) => (
                    <View key={item} style={styles.exerciseCard}>
                        <Image
                            source={require("../../assets/homeimages/yoga.jpeg")}
                            style={styles.cardImage}
                            resizeMode="cover"
                        />
                        <View style={styles.cardContent}>
                            <Text style={styles.cardTitle}>HIIT Training</Text>
                            <View style={styles.cardDetails}>
                                <Text style={styles.cardDuration}>45 mins</Text>
                                <View style={styles.difficultyPill}>
                                    <Text style={styles.difficultyText}>Advanced</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    headerContainer: {
        height: height * 0.75, // Increased image height
        marginBottom: 20,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        overflow: 'hidden',
    },
    topImage: {
        width: '100%',
        height: '100%',
    },
    fullOverlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        padding: 25,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'space-between',
        
    },
    header: {
        color: '#ffffff',
        fontSize: 34,
        fontWeight: '800',
        letterSpacing: 0.8,
        textShadowColor: 'rgba(0,0,0,0.5)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 8,
        marginTop: height * 0.15,      
    },
    metricsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 'auto',
    },
    imageDescription: {
        backgroundColor: 'rgba(255,255,255,0.15)',
        borderRadius: 15,
        padding: 20,
        marginTop: 20,
        fontWeight: 'bold'
    },
    imageDescriptionText: {
        color: '#ffffff',
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 15,
        textShadowColor: 'rgba(0,0,0,0.3)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
    moreButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
        textShadowColor: 'rgba(0,0,0,0.3)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 15,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: '700',
        color: '#2b2d42',
    },
    seeAll: {
        color: '#e63946',
        fontSize: 14,
        fontWeight: '600',
    },
    horizontalScroll: {
        paddingLeft: 20,
        paddingBottom: 30,
    },
    exerciseCard: {
        width: 280,
        backgroundColor: '#fff',
        borderRadius: 18,
        marginRight: 20,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
    },
    cardImage: {
        width: '100%',
        height: 180,
    },
    cardContent: {
        padding: 15,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#2b2d42',
        marginBottom: 8,
    },
    cardDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    cardDuration: {
        color: '#e63946',
        fontSize: 14,
        fontWeight: '600',
    },
    difficultyPill: {
        backgroundColor: '#f0f1f3',
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 20,
    },
    difficultyText: {
        color: '#6c757d',
        fontSize: 12,
        fontWeight: '600',
    },
    metricValue: {
        fontWeight: 'bold',
        color: '#FFFFFF'
        
    },
    metricLabel:{
        fontWeight: 'bold',
        color: '#FFFFFF'
    }
    
}); 

export default CardioScreen;