import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const roomSize = [19, 20, 34];
  const room = roomSize.map((size) => new ClassRoom(size));
  return room;
}
