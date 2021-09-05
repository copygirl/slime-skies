// priority: 0

onEvent("recipes", event => {
  // For each stair crafting recipe, ...
  event.forEachRecipe({ id: /_stairs/, type: "minecraft:crafting_shaped" }, recipe => {
    let input  = recipe.inputItems[0];
    let output = recipe.outputItems[0].getId();
    // ... modify the output to return 6x instead of 4x.
    recipe.replaceOutput(output, "6x " + output, false, (out, orig) => out);
    // ... add a back-crafting recipe to turn 1x stair => 1x block.
    event.shapeless(input, [ output ]);
  });

  // For each slab crafting recipe that outputs 6x slabs, ...
  event.forEachRecipe({ id: /_slab/, type: "minecraft:crafting_shaped" }, recipe => {
    if (recipe.outputItems[0].getCount() != 6) return;
    let input  = recipe.inputItems[0];
    let output = recipe.outputItems[0].getId();
    // ... add a back-crafting recipe to turn 2x slab => 1x block.
    event.shapeless(input, [ output, output ]);
  });
});
