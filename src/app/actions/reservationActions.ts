import { databases } from "../utils/appwrite";

interface Reservation {
  $id: string; // Unique identifier for the document
  $createdAt: string; // Timestamp when the document was created
  time: string; // The time of the reservation (e.g., "14:00")
  date: string; // The date of the reservation (e.g., "2024-12-25")
}

export async function getReservations(): Promise<Reservation[]> {
  try {
    const response = await databases.listDocuments(
      "6763f543000ea7b568f0", // Database ID
      "6763f578000ee46e6506"  // Collection ID
    );
    console.log(response.documents); // Log the fetched documents for debugging

    // Map documents to the Reservation interface
    const reservations: Reservation[] = response.documents.map((doc) => ({
      $id: doc.$id,
      $createdAt: doc.$createdAt,
      time: doc.time,
      date: doc.date,
    }));

    return reservations;
  } catch (error) {
    console.error("Error fetching reservations:", error);
    return []; // Return an empty array in case of an error
  }
}
