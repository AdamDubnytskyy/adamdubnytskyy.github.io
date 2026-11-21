// Edit this file to change the content of the landing page.

export const site = {
  name: 'Oleh Adam Dubnytskyy',
  title: 'Oleh Adam Dubnytskyy — Platform Engineering, DevOps, SRE',
  description:
    'Platform Engineering • DevOps • SRE. Cloud • Kubernetes • Security. EKS upgrades, secure CI/CD and GitOps delivery.',
  url: 'https://adamdubnytskyy.github.io',
  // Leave empty ('') to hide. The primary CTA falls back to GitHub.
  email: '',
  linkedin: '',
  github: 'https://github.com/AdamDubnytskyy',
};

export const expertise = [
  { n: '01', title: 'Platform Engineering', text: 'Internal platforms on Kubernetes that product teams can use without waiting on ops.' },
  { n: '02', title: 'DevOps & CI/CD', text: 'Secure pipelines and GitOps delivery with GitHub Actions, Argo CD and Kargo.' },
  { n: '03', title: 'SRE & Observability', text: 'Metrics, logs and traces with Prometheus, Grafana, Loki, Tempo and OpenTelemetry.' },
  { n: '04', title: 'Cloud on AWS', text: 'EKS, load balancing, DNS and elastic compute with Karpenter on AMD and ARM nodes.' },
  { n: '05', title: 'Kubernetes Operations', text: 'Version upgrades and day-2 operations for production clusters.' },
  { n: '06', title: 'Security', text: 'Keyless cloud access with OIDC, least-privilege IAM and Cilium network policies.' },
];

export type PackageGroup = { label?: string; points: string[] };
export type Pkg = {
  tag: string;
  featured: boolean;
  draft?: boolean;
  name: string;
  summary: string;
  groups: PackageGroup[];
  price: string;
};

export const packages: Pkg[] = [
  {
    tag: 'PACKAGE 01 · FLAGSHIP',
    featured: true,
    name: 'EKS Cluster Upgrade',
    summary:
      'End-to-end upgrade of a production Amazon EKS cluster: control plane, add-ons, data plane and every platform component.',
    groups: [
      {
        points: [
          'Upgrade readiness review and plan',
          'Control plane and EKS add-on upgrades',
          'AMD and ARM node group upgrades',
          'Ingress, autoscaling, networking and observability components',
          'GitOps tooling upgrades (Argo CD, Kargo)',
          'Runbook and handover',
        ],
      },
    ],
    price: '[YOUR PRICE]',
  },
  {
    tag: 'PACKAGE 02 · IN TWO PHASES',
    featured: true,
    name: 'Secure CI/CD & GitOps on EKS',
    summary:
      'Pipelines that deploy to EKS without long-lived credentials, then GitOps so every change reaches the cluster through a pull request.',
    groups: [
      {
        label: 'PHASE 1 — CI/CD FOUNDATION',
        points: [
          'GitHub Actions pipelines (migration from GitLab if needed)',
          'Reusable CI container image with AWS CLI and kubectl',
          'Keyless AWS access: OIDC trust between GitHub and AWS',
          'Terraform-managed IAM roles, trust policies and permissions',
          'EKS access entries with scoped Kubernetes RBAC',
          'Self-service namespace onboarding for repositories',
        ],
      },
      {
        label: 'PHASE 2 — GITOPS DELIVERY',
        points: [
          'Argo CD installation and configuration',
          'Namespaces and resources onboarded by pull request',
          'Optional promotion pipelines with Kargo',
        ],
      },
    ],
    price: '[YOUR PRICE]',
  },
  {
    tag: 'PACKAGE 03 · DRAFT',
    featured: false,
    draft: true,
    name: 'Observability & SRE',
    summary: '[REPLACE WITH YOUR SCOPE] Telemetry and alerting you can act on.',
    groups: [
      {
        points: [
          'Prometheus, Grafana, Loki, Tempo and OpenTelemetry',
          'Metrics delivery to ELK with Elastic Agent',
          '[SCOPE ITEM]',
          '[SCOPE ITEM]',
        ],
      },
    ],
    price: '[YOUR PRICE]',
  },
];

export const layers = [
  { n: '01', title: 'Control plane', text: 'Version upgrade of the managed EKS control plane.', chips: ['EKS control plane'] },
  { n: '02', title: 'Add-ons', text: 'EKS add-ons moved to versions compatible with the new release.', chips: ['EKS managed add-ons'] },
  { n: '03', title: 'Data plane', text: 'Worker nodes upgraded for both architectures.', chips: ['AMD64 node groups', 'ARM64 node groups'] },
  {
    n: '04',
    title: 'Cluster components',
    text: 'Platform controllers and operators upgraded in a safe order.',
    chips: [
      'Traefik Ingress Controller', 'Karpenter', 'Cilium operator', 'Elastic Agent DaemonSet → ELK',
      'Argo CD operator', 'Kargo (Akuity)', 'Grafana', 'Prometheus', 'Loki', 'OpenTelemetry',
      'Tempo', 'ExternalDNS', 'AWS Load Balancer Controller',
    ],
  },
];

export const writing = [
  {
    title: 'Configuring Terraform IaC pipelines to provision resources in cloud and Kubernetes',
    source: 'DevOps.dev',
    url: 'https://blog.devops.dev/configuring-terraform-iac-pipelines-to-provision-cloud-resources-in-cloud-and-kubernetes-3ff863fe983e',
  },
  {
    title: 'Self-service namespace onboarding on Amazon EKS: access entries and RBAC with GitHub',
    source: 'Medium · DevOps.dev',
    url: 'https://medium.com/devops-dev/self-service-namespace-onboarding-on-amazon-eks-automating-access-entries-and-rbac-with-github-74f0347e71e2',
  },
];

export const steps = [
  { n: 'STEP 01', title: 'Assess', text: 'Review the current cluster, versions and deprecations.' },
  { n: 'STEP 02', title: 'Plan', text: 'Agree scope, order of changes and rollback points.' },
  { n: 'STEP 03', title: 'Execute', text: 'Change layer by layer, verifying each before the next.' },
  { n: 'STEP 04', title: 'Hand over', text: 'Runbooks and documentation so your team can repeat it.' },
];
