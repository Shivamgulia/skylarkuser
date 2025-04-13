import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Pressable
} from "react-native";
import React from "react";
import Navbar from "../components/UI/Navbar";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

export default function Profile() {
  // Mock data - replace with actual data from your state/API
  const subscriptionActive = true;
  const paymentHistory = [
    { id: 1, date: "2024-03-15", amount: "₹1299", plan: "Premium Annual" },
    { id: 2, date: "2023-03-15", amount: "₹1299", plan: "Premium Annual" },
  ];

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header Section */}
        <View style={styles.header}>
          <Image
            source={require("../../assets/profile/profile.png")}
            style={styles.profileImage}
          />
          <View>
            <Text style={styles.profileName}>Hello Neha!</Text>
            <Text style={styles.profileSubtitle}>Lets Start Your Day</Text>
          </View>
        </View>

        {/* Date Navigation */}
        <View style={styles.dateContainer}>
          {[9, 10, 11, 12, 13, 14, 15].map((date, index) => (
            <Text
              key={date}
              style={[
                styles.dateText,
                index === 3 && styles.currentDate,
                index < 3 && styles.pastDate,
                index > 3 && styles.futureDate
              ]}
            >
              {index === 3 ? 'Tue, 12 Nov' : date}
            </Text>
          ))}
        </View>

        {/* Steps Progress */}
        <View style={styles.stepsContainer}>
          <View style={styles.stepsTextContainer}>
            <Text style={styles.stepsTitle}>Daily Steps</Text>
            <Text style={styles.stepsCount}>5000</Text>
            <Text style={styles.stepsLabel}>steps</Text>
          </View>

          {/* Progress Circle */}
          <View style={styles.progressContainer}>
            <View style={styles.progressOuter}>
              <View style={styles.progressMiddle}>
                <View style={styles.progressInner}>
                  <Text style={styles.progressText}>40%</Text>
                  <Text style={styles.progressSubtext}>From 100%</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Monthly Comparison */}
        <View style={styles.comparisonContainer}>
          <View style={styles.comparisonCard}>
            <Image
              source={require("../../assets/profile/leftrec.png")}
              style={styles.comparisonImage}
              resizeMode="contain"
            />
            <View style={styles.comparisonText}>
              <Text style={styles.comparisonLabel}>Last Month</Text>
              <Text style={styles.comparisonValue}>1000 steps</Text>
            </View>
          </View>

          <View style={styles.comparisonCard}>
            <Image
              source={require("../../assets/profile/rightrec.png")}
              style={styles.comparisonImage}
              resizeMode="contain"
            />
            <View style={styles.comparisonText}>
              <Text style={styles.comparisonLabel}>This Month</Text>
              <Text style={styles.comparisonValue}>5000 steps</Text>
            </View>
          </View>
        </View>

        {/* Statistics Section */}
        <Text style={styles.sectionTitle}>Statistics</Text>
        <View style={styles.statsContainer}>
          {/* Heart Rate Card */}
          <View style={styles.statsCard}>
            <View style={styles.iconContainer}>
              <Image
                source={require("../../assets/profile/heart.png")}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.statsTitle}>Heart</Text>
            <Image
              source={require("../../assets/profile/heartrate.png")}
              style={styles.statsImage}
              resizeMode="contain"
            />
            <View style={styles.statsValueContainer}>
              <Text style={styles.statsValue}>100</Text>
              <Text style={styles.statsUnit}>BPM</Text>
            </View>
          </View>

          {/* Calories & Water Cards */}
          <View style={styles.rightColumn}>
            <View style={styles.statsCard}>
              <View style={styles.cardHeader}>
                <Text style={styles.statsTitle}>Calories</Text>
                <View style={styles.iconContainer}>
                  <Image
                    source={require("../../assets/profile/fire.png")}
                    resizeMode="contain"
                  />
                </View>
              </View>
              <View style={styles.statsValueContainer}>
                <Text style={styles.statsValue}>800</Text>
                <Text style={styles.statsUnit}>Kcal</Text>
              </View>
            </View>

            <View style={styles.statsCard}>
              <View style={styles.cardHeader}>
                <Text style={styles.statsTitle}>Water</Text>
                <View style={styles.iconContainer}>
                  <Image
                    source={require("../../assets/profile/drop.png")}
                    resizeMode="contain"
                  />
                </View>
              </View>
              <View style={styles.statsValueContainer}>
                <Text style={styles.statsValue}>1.9</Text>
                <Text style={styles.statsUnit}>Liters</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Sleep Time Card */}
        <View style={[styles.statsCard, styles.sleepCard]}>
          <View style={styles.cardHeader}>
            <View style={styles.iconContainer}>
              <Image
                source={require("../../assets/profile/moon.png")}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.statsTitle}>SleepTime</Text>
          </View>
          <Text style={styles.sleepTime}>7h10m</Text>
        </View>

        {/* BMI Container */}
        <View style={styles.statsCard}>
          <View style={styles.cardHeader}>
            <Text style={styles.statsTitle}>BMI</Text>
            <View style={styles.iconContainer}>
              <Image
                source={require("../../assets/profile/bmi.png")}
                resizeMode="contain"
                style={styles.bmiIcon}
              />
            </View>
          </View>
          <View style={styles.statsValueContainer}>
            <Text style={styles.statsValue}>22.5</Text>
            <Text style={styles.statsUnit}>kg/m²</Text>
          </View>
          <View style={styles.bmiCategory}>
            <Text style={styles.bmiCategoryText}>Normal</Text>
          </View>
        </View>

        {/* Subscription Status Section */}
        <Text style={styles.sectionTitle}>Subscription Status</Text>
        <View style={styles.subscriptionContainer}>
          <Text style={styles.subscriptionText}>
            {subscriptionActive ? 'Active Premium Member' : 'No Active Subscription'}
          </Text>
          <Pressable style={styles.subscriptionButton}>
            <Text style={styles.buttonText}>
              {subscriptionActive ? 'Manage Subscription' : 'Upgrade Now'}
            </Text>
          </Pressable>
        </View>

        {/* Payment History Section */}
        <Text style={styles.sectionTitle}>Payment History</Text>
        <View style={styles.paymentHistoryContainer}>
          {paymentHistory.map((payment) => (
            <View key={payment.id} style={styles.paymentCard}>
              <View>
                <Text style={styles.paymentDate}>{payment.date}</Text>
                <Text style={styles.paymentPlan}>{payment.plan}</Text>
              </View>
              <View style={styles.paymentActions}>
                <Text style={styles.paymentAmount}>{payment.amount}</Text>
                <Pressable style={styles.downloadButton}>
                  <Text style={styles.downloadText}>Download Receipt</Text>
                </Pressable>
              </View>
            </View>
          ))}
        </View>



        {/* Spacer for navbar */}
        <View style={{ height: windowHeight * 0.1 }} />
      </ScrollView>

      {/* Fixed Navbar */}
      <View style={styles.navbar}>
        <Navbar />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollContent: {
    paddingTop: windowHeight * 0.06,
    paddingHorizontal: windowWidth * 0.04,
    paddingBottom: windowHeight * 0.02,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: windowWidth * 0.05,
    marginBottom: windowHeight * 0.03,
  },
  profileImage: {
    width: windowWidth * 0.15,
    height: windowWidth * 0.15,
    borderRadius: windowWidth * 0.075,
  },
  profileName: {
    fontSize: windowWidth * 0.06,
    fontWeight: "bold",
  },
  profileSubtitle: {
    fontSize: windowWidth * 0.035,
    color: "#646363",
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: windowHeight * 0.02,
  },
  dateText: {
    fontSize: windowWidth * 0.035,
  },
  currentDate: {
    backgroundColor: "black",
    color: "white",
    borderRadius: windowWidth * 0.03,
    paddingVertical: windowHeight * 0.005,
    paddingHorizontal: windowWidth * 0.03,
  },
  pastDate: {
    color: "#B3AFAF",
  },
  futureDate: {
    color: "#646363",
  },
  stepsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: windowHeight * 0.03,
    paddingHorizontal: windowWidth * 0.02,
  },
  stepsTextContainer: {
    flex: 1,
  },
  stepsTitle: {
    fontSize: windowWidth * 0.045,
    fontWeight: "bold",
    marginBottom: windowHeight * 0.005,
  },
  stepsCount: {
    fontSize: windowWidth * 0.1,
    color: "#7372BD",
    fontWeight: "bold",
  },
  stepsLabel: {
    fontSize: windowWidth * 0.035,
    color: "#646363",
  },
  progressContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  progressOuter: {
    backgroundColor: "#BFBFBF",
    width: windowWidth * 0.25,
    height: windowWidth * 0.25,
    borderRadius: windowWidth * 0.125,
    justifyContent: "center",
    alignItems: "center",
  },
  progressMiddle: {
    backgroundColor: "#7372BD",
    width: "80%",
    height: "80%",
    borderRadius: windowWidth * 0.1,
    justifyContent: "center",
    alignItems: "center",
  },
  progressInner: {
    backgroundColor: "white",
    width: "80%",
    height: "80%",
    borderRadius: windowWidth * 0.08,
    justifyContent: "center",
    alignItems: "center",
  },
  progressText: {
    fontSize: windowWidth * 0.045,
    fontWeight: "bold",
  },
  progressSubtext: {
    fontSize: windowWidth * 0.025,
  },
  comparisonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: windowHeight * 0.03,
  },
  comparisonCard: {
    width: "48%",
    aspectRatio: 1.5,
  },
  comparisonImage: {
    width: "100%",
    height: "100%",
  },
  comparisonText: {
    position: "absolute",
    top: "30%",
    left: "15%",
  },
  comparisonLabel: {
    color: "white",
    fontSize: windowWidth * 0.035,
  },
  comparisonValue: {
    color: "white",
    fontSize: windowWidth * 0.04,
    fontWeight: "bold",
    marginTop: windowHeight * 0.005,
  },
  sectionTitle: {
    fontSize: windowWidth * 0.05,
    fontWeight: "bold",
    marginVertical: windowHeight * 0.02,
  },
  statsContainer: {
    flexDirection: "row",
    gap: windowWidth * 0.03,
    marginBottom: windowHeight * 0.02,
  },
  statsCard: {
    flex: 1,
    backgroundColor: "#F1F2F6",
    borderRadius: 13,
    padding: windowWidth * 0.04,
    marginBottom: windowHeight * 0.03,
  },
  iconContainer: {
    backgroundColor: "white",
    borderRadius: windowWidth * 0.5,
    width: windowWidth * 0.08,
    height: windowWidth * 0.08,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: windowHeight * 0.01,
  },
  statsTitle: {
    fontSize: windowWidth * 0.04,
    fontWeight: "bold",
  },
  statsImage: {
    width: "100%",
    height: windowHeight * 0.05,
    marginVertical: windowHeight * 0.01,
  },
  statsValueContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: windowWidth * 0.02,
    marginTop: windowHeight * 0.01,
  },
  statsValue: {
    fontSize: windowWidth * 0.07,
    fontWeight: "bold",
  },
  statsUnit: {
    fontSize: windowWidth * 0.04,
    fontWeight: "bold",
    marginBottom: windowHeight * 0.005,
  },
  rightColumn: {
    flex: 1,
    gap: windowHeight * 0.015,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sleepCard: {
    marginBottom: windowHeight * 0.03,
  },
  sleepTime: {
    fontSize: windowWidth * 0.07,
    fontWeight: "bold",
    marginTop: windowHeight * 0.01,
  },

  subscriptionContainer: {
    backgroundColor: '#F1F2F6',
    borderRadius: 13,
    padding: windowWidth * 0.04,
    marginBottom: windowHeight * 0.03,

  },
  subscriptionText: {
    fontSize: windowWidth * 0.04,
    fontWeight: 'bold',
    color: '#7372BD',
    marginBottom: windowHeight * 0.01,
  },
  subscriptionButton: {
    backgroundColor: '#7372BD',
    borderRadius: 8,
    padding: windowWidth * 0.03,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  paymentHistoryContainer: {
    marginBottom: windowHeight * 0.03,
  },
  paymentCard: {
    backgroundColor: '#F1F2F6',
    borderRadius: 13,
    padding: windowWidth * 0.04,
    marginBottom: windowHeight * 0.015,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  paymentDate: {
    fontSize: windowWidth * 0.035,
    color: '#646363',
  },
  paymentPlan: {
    fontSize: windowWidth * 0.04,
    fontWeight: 'bold',
  },
  paymentAmount: {
    fontSize: windowWidth * 0.045,
    fontWeight: 'bold',
    color: '#7372BD',
    marginBottom: windowHeight * 0.005,
  },
  paymentActions: {
    alignItems: 'flex-end',
  },
  downloadButton: {
    backgroundColor: '#7372BD',
    borderRadius: 8,
    paddingVertical: windowHeight * 0.005,
    paddingHorizontal: windowWidth * 0.03,
  },
  downloadText: {
    color: 'white',
    fontSize: windowWidth * 0.03,
  },
  bmiIcon: {
    width: 50,
    height: 50,
  },
  navbar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: windowHeight * 0.08,
    paddingBottom: windowHeight * 0.015,
  },
});