// Create: Power Grid
if (Platform.isLoaded("powergrid")) {
    ServerEvents.recipes(event => {
        // Candidate recipe adjustments, intentionally not implemented yet:
        //
        // Duplicate materials:
        // - powergrid:zinc_sheet duplicates the existing zinc plate flow and appears in
        //   #forge:plates/zinc. Prefer one zinc plate item and replace/remove this output.
        //
        // Progression gates:
        // - powergrid:conductive_casing is the root for most electrical blocks and is
        //   currently only Create Andesite Casing + zinc ingot. Consider moving it to
        //   Zinc/Lead/Invar machine progression.
        // - powergrid:electric_motor, powergrid:constant_speed_motor, and powergrid:servo
        //   overlap the pack's existing electric motor / kinetic-energy bridge. These
        //   should likely be Invar-tier or later.
        // - powergrid:generator_housing, powergrid:generator_commutator, and
        //   powergrid:generator_induction_rotor can introduce early electrical
        //   generation. Gate these alongside the pack's flux-energy chapter.
        // - powergrid:battery and powergrid:portable_battery provide energy storage;
        //   keep them behind the same energy tier as dynamos or later.
        //
        // Utility bypass risks:
        // - powergrid:basin_heater, powergrid:heating_coil, and powergrid:electric_fan
        //   may bypass intended heating/fan setup costs.
        // - powergrid:growth_lamp may bypass farming progression if left cheap.
        //
        // Circuit line:
        // - powergrid:circuit_design_table, powergrid:unetched_circuit,
        //   powergrid:incomplete_circuit, powergrid:integrated_circuit, bjt_npn, and
        //   bjt_pnp probably need alignment with CABIN's silicon/circuit progression.
        //
        // Wiring / connectors:
        // - powergrid:wire_connector, powergrid:heavy_wire_connector,
        //   powergrid:device_connector, powergrid:socket, and copper wires/coils are
        //   probably fine early, but should be checked after the major gates above.
    })
}
