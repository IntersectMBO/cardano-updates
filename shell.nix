{
  sources ? import ./nix/sources.nix {}
}:
let
  pkgs = import sources.nixpkgs {};

  inputs = [ pkgs.git
             pkgs.nodejs-18_x
             (pkgs.yarn.override { nodejs = pkgs.nodejs-18_x; })
           ] ;

in pkgs.mkShell {
  buildInputs = inputs ;
}
