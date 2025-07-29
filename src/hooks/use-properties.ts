import { useQuery } from "@tanstack/react-query";
import { PropertySearchParams } from "@/types/property";

export function useProperties(params: PropertySearchParams = {}) {
  const searchParams = new URLSearchParams();
  
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      searchParams.append(key, String(value));
    }
  });

  return useQuery({
    queryKey: ["properties", params],
    queryFn: async () => {
      const response = await fetch(`/api/properties?${searchParams}`);
      if (!response.ok) {
        throw new Error("Failed to fetch properties");
      }
      return response.json();
    },
  });
}

export function useProperty(id: string) {
  return useQuery({
    queryKey: ["property", id],
    queryFn: async () => {
      const response = await fetch(`/api/properties/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch property");
      }
      return response.json();
    },
    enabled: !!id,
  });
}