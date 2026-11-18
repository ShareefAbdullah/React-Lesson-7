declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}

// Plain Sass: side-effect import only (no exports)
declare module "*.scss";
