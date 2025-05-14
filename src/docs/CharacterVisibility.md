# Character Visibility System

This document explains the character visibility system that ensures the player character is always visible even when obstructed by map elements.

## How It Works

The system uses a raycasting technique to detect objects between the camera and the character:

1. A ray is cast from the camera toward the character
2. Any objects intersected by this ray are made semi-transparent
3. This creates a "see-through" effect for any obstacles between the camera and character
4. The original material properties are restored when objects are no longer blocking the view

## Implementation Details

The system is implemented using a custom React hook `useObjectTransparency` that:

- Detects meshes between the camera and target object
- Temporarily modifies material properties (opacity and transparency)
- Restores original material properties when no longer needed
- Works with any type of meshes in the scene

## Controls

The visibility system can be controlled through the debug panel with these parameters:

- `ENABLE_OCCLUSION_TRANSPARENCY`: Toggle the visibility system on/off
- `OBJECT_TRANSPARENCY`: Control the opacity level of occluding objects (0-1)

## Benefits

This visibility system:

- Prevents the character from being hidden behind walls, props, or other map elements
- Maintains spatial awareness for the player at all times
- Makes navigation easier in complex environments
- Provides an elegant solution without needing to modify camera behavior

## Technical Considerations

When working with the visibility system:

- All meshes should support transparency for this to work correctly
- The system works with both single materials and material arrays
- The performance impact is minimal as it only affects objects directly between the camera and character
- All changes to materials are temporary and restored properly

## Usage

The system is already integrated into the `CharacterController` component and doesn't require any additional setup to use in the game.
