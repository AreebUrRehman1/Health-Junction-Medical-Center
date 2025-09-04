import { useState } from 'react';
import dayjs from 'dayjs'
import weekday from 'dayjs/plugin/weekday';
import { DoctorHeader } from '../../components/DoctorHeader'
import { Footer } from '../../components/Footer'
import './SchedulePage.css'

dayjs.extend(weekday);

export function SchedulePage() {

  const [appointments, setAppointments] = useState({
    [dayjs().weekday(1).format('YYYY-MM-DD')]: [
      { time: '09:00 AM', patient: 'John Doe', reason: 'Follow-up check-up' },
      { time: '10:30 AM', patient: 'Jane Smith', reason: 'Annual physical' },
      { time: '09:00 AM', patient: 'John Doe', reason: 'Follow-up check-up' },
      { time: '11:00 AM', patient: 'David Lee', reason: 'Lab results review' },
    ],
    [dayjs().weekday(2).format('YYYY-MM-DD')]: [
      { time: '09:30 AM', patient: 'Emily Chen', reason: 'New patient consultation' },
      { time: '11:00 AM', patient: 'Michael Brown', reason: 'Chronic pain management' },
    ],
    [dayjs().weekday(4).format('YYYY-MM-DD')]: [
      { time: '09:00 AM', patient: 'Susan Jones', reason: 'Fever and symptoms' },
      { time: '10:00 AM', patient: 'Robert Wilson', reason: 'Allergy consultation' },
    ],
    [dayjs().weekday(5).format('YYYY-MM-DD')]: [
      { time: '02:00 PM', patient: 'Lisa Taylor', reason: 'Post-op follow-up' },
    ],
  });

  const [currentDate, setCurrentDate] = useState(dayjs().weekday(1));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newAppointment, setNewAppointment] = useState({
    date: dayjs().format('YYYY-MM-DD'),
    time: '',
    patient: '',
    reason: '',
  });

  // Handles adding the new appointment to the state
  const handleAddAppointment = (e) => {
    e.preventDefault(); // Prevents the form from submitting and refreshing the page

    // We get the date from the form and format it correctly
    const appointmentDate = dayjs(newAppointment.date).format('YYYY-MM-DD');

    // Create a new copy of the appointments object to update the state immutably.
    // This is crucial in React to trigger a re-render.
    const updatedAppointments = { ...appointments };

    // Initialize an array for the new date if it doesn't exist yet
    if (!updatedAppointments[appointmentDate]) {
      updatedAppointments[appointmentDate] = [];
    }

    // Add the new appointment to the correct day's array
    updatedAppointments[appointmentDate].push({
      time: newAppointment.time,
      patient: newAppointment.patient,
      reason: newAppointment.reason,
    });

    // Update the state with the new, modified object
    setAppointments(updatedAppointments);
    // Reset the form and close the modal
    setNewAppointment({ date: dayjs().format('YYYY-MM-DD'), time: '', patient: '', reason: '' });
    setIsModalOpen(false);
  };

  
  // Handles form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAppointment(prevState => ({ ...prevState, [name]: value }));
  };

  const goToNextWeek = () => {
    setCurrentDate(currentDate.add(7, 'day'));
  };

  const goToPreviousWeek = () => {
    setCurrentDate(currentDate.subtract(7, 'day'));
  };

  const startOfWeek = currentDate;
  const endOfWeek = startOfWeek.add(6, 'day');
  const formattedRange = `${startOfWeek.format('MMMM D')} - ${endOfWeek.format('MMMM D, YYYY')}`;

  // This creates an array of day objects for the current week to map over
  const weeklyDays = Array.from({ length: 5 }, (_, i) => ({
    date: currentDate.add(i, 'day'),
    appointments: appointments[currentDate.add(i, 'day').format('YYYY-MM-DD')] || [],
  }));

  return (
    <>
      <title>Doctor Portal - Schedule</title>

      <DoctorHeader />

      <main className="schedule-main">
        <section className="schedule-header">
          <h2>Your Weekly Schedule</h2>
          <div className="schedule-controls">
            <button className="control-button" onClick={goToPreviousWeek}>&larr; Previous Week</button>
            <div className="current-week">
              <h3>{formattedRange}</h3>
            </div>
            <button className="control-button" onClick={goToNextWeek}>Next Week &rarr;</button>
            <button className="add-button" onClick={() => setIsModalOpen(true)}>Add Appointment</button>
          </div>
        </section>

        <section className="weekly-schedule-container">
          {
            weeklyDays.map((dayData) => {
              const day = dayData.date.format('dddd, MMM D');
              const appointmentsForDay = dayData.appointments;

              return (
                <div key={dayData.date.format('YYYY-MM-DD')} className="day-column">
                  <h4>{day}</h4>
                  {appointmentsForDay.length > 0 ? (
                    appointmentsForDay.map((appointment, index) => (
                      <div key={index} className="appointment-card">
                        <p className="appointment-time">{appointment.time}</p>
                        <p className="appointment-patient">{appointment.patient}</p>
                        <p className="appointment-reason">{appointment.reason}</p>
                      </div>
                    ))
                  ) : (
                    <div className="day-off">
                      No appointments scheduled
                    </div>
                  )}
                </div>
              );
            })
          }
        </section>
      </main>

      {/* Modal for adding a new appointment */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Add New Appointment</h3>
              <button onClick={() => setIsModalOpen(false)} className="modal-close-btn">&times;</button>
            </div>
            <form onSubmit={handleAddAppointment} className="modal-form">
              <div>
                <label>Date</label>
                <input
                  type="date"
                  name="date"
                  value={newAppointment.date}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label>Time</label>
                <input
                  type="time"
                  name="time"
                  value={newAppointment.time}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label>Patient Name</label>
                <input
                  type="text"
                  name="patient"
                  value={newAppointment.patient}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label>Reason</label>
                <textarea
                  name="reason"
                  value={newAppointment.reason}
                  onChange={handleInputChange}
                  rows="3"
                  required
                ></textarea>
              </div>
              <div className="modal-form-actions">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="cancel"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="save"
                >
                  Save Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}


      <Footer />
    </>
  )
}