import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Modal, StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";

const CalendarScreen = () => {
    const [selectedDate, setSelectedDate] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    
    return (
        <View style={styles.container}>
            {/* Header */}
            <Text style={styles.header}>Add New Event</Text>

            {/* Calendar Section */}
            <View style={styles.calendarWrapper}>
                <Calendar
                    onDayPress={(day) => setSelectedDate(day.dateString)}
                    markedDates={{ [selectedDate]: { selected: true, selectedColor: "blue" } }}
                />
            </View>

            {/* Selected Date Display */}
            {selectedDate ? (
                <Text style={styles.selectedDateText}>Events for {selectedDate}</Text>
            ) : null}

            {/* Add Event Button */}
            <TouchableOpacity style={styles.addEventButton} onPress={() => setModalVisible(true)}>
                <Text style={styles.buttonText}>Add Event</Text>
            </TouchableOpacity>

            {/* Event Modal */}
            <Modal visible={modalVisible} transparent animationType="slide">
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Add Event</Text>
                        
                        {/* Event Input Fields */}
                        <TextInput style={styles.input} placeholder="Event Title" />
                        <TextInput style={styles.input} placeholder="Start Time (e.g., 10:00 AM)" />
                        <TextInput style={styles.input} placeholder="End Time (e.g., 12:00 PM)" />
                        <TextInput
                            style={[styles.input, styles.textArea]}
                            placeholder="Event Description"
                            multiline
                        />

                        {/* Modal Buttons */}
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
                                <Text style={styles.buttonText}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.submitButton} onPress={() => setModalVisible(false)}>
                                <Text style={styles.buttonText}>Add Event</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E8F6F3",
        padding: 10,
    },
    header: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
    },
    calendarWrapper: {
        flex: 1, 
        marginBottom: 20,
    },
    selectedDateText: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 10,
    },
    addEventButton: {
        backgroundColor: "#FFD700",
        padding: 15,
        borderRadius: 8,
        alignItems: "center",
        marginHorizontal: 20,
        marginBottom: 30,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "bold",
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
        width: "90%",
        backgroundColor: "#FFF",
        padding: 20,
        borderRadius: 10,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    input: {
        width: "100%",
        padding: 10,
        borderWidth: 1,
        borderColor: "#CCC",
        borderRadius: 5,
        marginBottom: 10,
    },
    textArea: {
        height: 80,
        textAlignVertical: "top",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
    },
    cancelButton: {
        backgroundColor: "red",
        padding: 10,
        borderRadius: 5,
        flex: 1,
        marginRight: 5,
        alignItems: "center",
    },
    submitButton: {
        backgroundColor: "green",
        padding: 10,
        borderRadius: 5,
        flex: 1,
        marginLeft: 5,
        alignItems: "center",
    },
});

export default CalendarScreen;
